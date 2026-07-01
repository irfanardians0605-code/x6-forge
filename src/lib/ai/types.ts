export type MessageRole =
  | "user"
  | "assistant";

export type MessageStatus =
  | "waiting"
  | "running"
  | "completed";

export interface Message {

  id: string;

  role: MessageRole;

  content: string;

  createdAt: number;

  status?: MessageStatus;

  intent?: string;

  tool?: string;

  metadata?: any;

}

export interface ResearchPipeline {

  intent: MessageStatus;

  planner: MessageStatus;

  dexscreener: MessageStatus;

  risk: MessageStatus;

  report: MessageStatus;

  openai: MessageStatus;

}

export type AIModel =
  | "openai"
  | "claude"
  | "gemini"
  | "grok"
  | "deepseek";