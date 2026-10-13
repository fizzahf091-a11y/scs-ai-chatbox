import type { Message } from "../types/chat.types";

export function createMessage(
  text: string,
  sender: Message["sender"]
): Message {
  return {
    id: Date.now(),
    text,
    sender,
  };
}