import { useEffect, useRef, useState } from "react";
import type { Message } from "../types/chat.types";
import { chatText } from "../text/chatText";
import { createMessage } from "./messageHandler";

type Conversation = {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: number;
};

const STORAGE_KEY = "scs-chat-history";

function createWelcomeMessage(): Message {
  return {
    id: Date.now(),
    text: chatText.welcome,
    sender: "bot",
  };
}

function createConversation(): Conversation {
  return {
    id: `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: "New Chat",
    messages: [createWelcomeMessage()],
    updatedAt: Date.now(),
  };
}

export function useChatLogic() {
  const [initialConversation] = useState<Conversation>(
    createConversation
  );

  const [conversations, setConversations] = useState<Conversation[]>([
    initialConversation,
  ]);

  const [activeConversationId, setActiveConversationId] =
    useState(initialConversation.id);

  const [input, setInput] = useState("");
  const [historyLoaded, setHistoryLoaded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation =
    conversations.find(
      (conversation) => conversation.id === activeConversationId
    ) ?? conversations[0];

  const messages = activeConversation?.messages ?? [];

  // Load saved conversations
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEY);

      if (savedHistory) {
        const parsed = JSON.parse(savedHistory) as {
          conversations?: Conversation[];
          activeConversationId?: string;
        };

        if (
          Array.isArray(parsed.conversations) &&
          parsed.conversations.length > 0
        ) {
          setConversations(parsed.conversations);

          const savedActiveId = parsed.activeConversationId;

          const activeExists = parsed.conversations.some(
            (conversation) => conversation.id === savedActiveId
          );

          setActiveConversationId(
            activeExists
              ? savedActiveId!
              : parsed.conversations[0].id
          );
        }
      }
    } catch (error) {
      console.error("Unable to load chat history:", error);
    } finally {
      setHistoryLoaded(true);
    }
  }, []);

  // Save conversations whenever history changes
  useEffect(() => {
    if (!historyLoaded) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          conversations,
          activeConversationId,
        })
      );
    } catch (error) {
      console.error("Unable to save chat history:", error);
    }
  }, [conversations, activeConversationId, historyLoaded]);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Send a message and update the conversation title
  function handleSend() {
    const text = input.trim();

    if (!text || !activeConversation) return;

    const userMessage = createMessage(text, "user");

    setConversations((previous) =>
      previous.map((conversation) => {
        if (conversation.id !== activeConversationId) {
          return conversation;
        }

        const hasUserMessages = conversation.messages.some(
          (message) => message.sender === "user"
        );

        const title = hasUserMessages
          ? conversation.title
          : text.length > 32
            ? `${text.slice(0, 32)}...`
            : text;

        return {
          ...conversation,
          title,
          messages: [...conversation.messages, userMessage],
          updatedAt: Date.now(),
        };
      })
    );

    setInput("");
  }

  // Start a new conversation
  function startNewChat() {
    const newConversation = createConversation();

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setActiveConversationId(newConversation.id);
    setInput("");
  }

  // Open an existing conversation
  function openConversation(conversationId: string) {
    setActiveConversationId(conversationId);
    setInput("");
  }

  return {
    messages,
    input,
    setInput,
    handleSend,
    messagesEndRef,

    conversations,
    activeConversationId,
    startNewChat,
    openConversation,
  };
}

