import { NextResponse } from "next/server";
import OpenAI from "openai";
import { scsKnowledgeBase } from "../../../logic/scsData";

const WHATSAPP_NUMBER = "+92 309 5982583";
const MAX_MESSAGE_LENGTH = 2000;

const MURIDKE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Office%20No.%201%2C%20Grand%20Estate%20Society%2C%20Main%20G.T.%20Road%2C%20Muridke%2C%20Pakistan";

type ChatRequest = {
  message?: unknown;
};

function detectLanguage(
  message: string
): "urdu" | "roman" | "english" {
  if (/[\u0600-\u06FF]/.test(message)) {
    return "urdu";
  }

  const romanUrduPattern =
    /\b(kya|hai|hain|ka|ki|ke|ko|mein|main|mujhe|mera|meri|mere|aap|ap|kaise|kahan|kab|kyun|batao|btao|chahiye|krna|karna|karein|kro|aur|nahi|nahin|acha|achha|kitna|kitni|kitne|milega|milay|fee|fees|bta|btaen|parhna|seekhna|chahte|chahti|hoon|hun|raha|rahi|sakta|sakti|ham|hum|unka|wala|wali|wale)\b/i;

  return romanUrduPattern.test(message) ? "roman" : "english";
}

function getFallbackResponse(message: string): string {
  const language = detectLanguage(message);

  if (language === "urdu") {
    return `معذرت، اس وقت آپ کے سوال کا جواب دستیاب نہیں ہے۔ مزید معلومات کے لیے واٹس ایپ نمبر ${WHATSAPP_NUMBER} پر رابطہ کریں۔`;
  }

  if (language === "roman") {
    return `Maazrat, is waqt aapke sawal ka jawab available nahi hai. Mazeed maloomat ke liye WhatsApp ${WHATSAPP_NUMBER} par rabta karein.`;
  }

  return `Sorry, I couldn't answer your question right now. Please try again later.`;
}

function jsonError(
  message: string,
  status: number,
  userMessage?: string
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...(userMessage ? { answer: userMessage } : {}),
    },
    { status }
  );
}

export async function POST(req: Request) {
  let message = "";

  try {
    // 1. Validate the request
    let body: ChatRequest;

    try {
      body = (await req.json()) as ChatRequest;
    } catch {
      return jsonError(
        "Invalid request body.",
        400,
        "Please send a valid message."
      );
    }

    message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return jsonError(
        "Message is required.",
        400,
        "Please enter a message."
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return jsonError(
        "Message is too long.",
        400,
        "Please keep your message under 2000 characters."
      );
    }

    // 2. Handle the SCS address without requiring the AI API
    const normalizedMessage = message.toLowerCase();

    const asksForAddress =
      /\b(address|adres|addres|adress|adrs|location|where|pata|kahan|kidhar)\b/i.test(
        normalizedMessage
      );

    const mentionsSCS =
      /\b(scs|training|tarnimg|trainig|center|centre|office|muridke)\b/i.test(
        normalizedMessage
      );

    if (asksForAddress && mentionsSCS) {
      const language = detectLanguage(message);

      const addressAnswer =
        language === "urdu"
          ? `SCS Training & Development Center کا پتہ: Office No. 1, Grand Estate Society, Main G.T. Road, Muridke, Pakistan.\n\n[Google Maps پر دیکھیں](${MURIDKE_MAPS_URL})`
          : language === "roman"
            ? `SCS Training & Development Center ka address: Office No. 1, Grand Estate Society, Main G.T. Road, Muridke, Pakistan.\n\n[Google Maps par dekhein](${MURIDKE_MAPS_URL})`
            : `SCS Training & Development Center is located at Office No. 1, Grand Estate Society, Main G.T. Road, Muridke, Pakistan.\n\n[View on Google Maps](${MURIDKE_MAPS_URL})`;

      return NextResponse.json({
        success: true,
        answer: addressAnswer,
        source: "fixed",
      });
    }

    // 3. Check the OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY is missing.");

      return jsonError(
        "AI service is not configured.",
        500,
        getFallbackResponse(message)
      );
    }

    // 4. Initialize OpenAI
    const openai = new OpenAI({
      apiKey,
      timeout: 30000,
      maxRetries: 1,
    });

    // 5. System prompt
    const systemPrompt = `
You are the official AI assistant for SCS Training & Development Center,
associated with Synergic Corporate Solutions (SCS).

LANGUAGE RULES:
1. Answer in the same language and writing style as the user.
2. English question = English answer.
3. Roman Urdu question = Roman Urdu answer.
4. Urdu-script question = Urdu-script answer.
5. Do not switch languages unnecessarily.

KNOWLEDGE BASE RULES:
1. Use the SCS knowledge base as the primary source for company facts.
2. Never invent company details, staff roles, fees, schedules, admission
   dates, policies, or current vacancies.
3. If the requested information is unavailable, say so briefly.
4. Do not claim to have completed an action that you did not perform.
5. For unavailable SCS information, direct the user to WhatsApp
   ${WHATSAPP_NUMBER} only when relevant.

ANSWER LENGTH AND STYLE:
1. Answer only what the user asks.
2. Keep every answer short, direct, and relevant.
3. For a simple question, use one or two sentences.
4. Do not add unrequested steps, suggestions, examples, or explanations.
5. Do not repeat information unnecessarily.
6. If the user asks for a list or detailed explanation, provide the
   requested details only.
7. Do not automatically add greetings, summaries, or follow-up questions.
8. Do not add contact details unless the user asks or they are necessary.
9. Do not make up information to make an answer seem complete.

LINK RULES:
1. Format relevant links as valid Markdown links.
2. Use this exact Google Maps URL for the Muridke center:
   ${MURIDKE_MAPS_URL}
3. Never add a backslash before URL characters such as &.
4. Do not invent or alter official URLs.
5. Do not claim that this Maps search link is a verified exact office pin.

SCS KNOWLEDGE BASE:
${JSON.stringify(scsKnowledgeBase)}
    `.trim();

    // 6. Get the AI answer
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.2,
      max_tokens: 700,
    });

    const answer =
      completion.choices[0]?.message?.content?.trim();

    if (!answer) {
      throw new Error("OpenAI returned an empty response.");
    }

    // 7. Return the answer
    return NextResponse.json({
      success: true,
      answer,
      source: "openai",
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "The AI service could not process your request.",
        answer: getFallbackResponse(message),
      },
      { status: 500 }
    );
  }
}