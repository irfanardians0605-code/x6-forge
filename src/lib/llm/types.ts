export type LLMProvider =
  | "openrouter"
  | "openai"
  | "claude"
  | "gemini";

export type LLMModel =
  | "claude"
  | "gpt"
  | "deepseek"
  | "llama"
  | "qwen";

export type ChatRole =
  | "system"
  | "user"
  | "assistant";

export interface ChatMessage {

  role: ChatRole;

  content: string;

}

export interface LLMRequest {

  model: LLMModel;

  messages: ChatMessage[];

  temperature?: number;

  maxTokens?: number;

}

export interface LLMResponse {

  text: string;

  model: string;

  provider: LLMProvider;

}