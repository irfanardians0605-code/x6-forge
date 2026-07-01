import { Message } from "./types";

export function createUserMessage(
  content: string
): Message {
  return {
    id: crypto.randomUUID(),

    role: "user",

    content,

    createdAt: Date.now(),

    status: "completed",
  };
}

export function createAssistantMessage(
  content: string
): Message {
  return {
    id: crypto.randomUUID(),

    role: "assistant",

    content,

    createdAt: Date.now(),

    status: "completed",
  };
}

export function createWaitingMessage(
  content: string
): Message {
  return {
    id: crypto.randomUUID(),

    role: "assistant",

    content,

    createdAt: Date.now(),

    status: "waiting",
  };
}

export function createRunningMessage(
  content: string
): Message {
  return {
    id: crypto.randomUUID(),

    role: "assistant",

    content,

    createdAt: Date.now(),

    status: "running",
  };
}