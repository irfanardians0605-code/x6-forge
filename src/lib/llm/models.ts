import { LLMModel } from "./types";

export const MODEL_MAP: Record<
  LLMModel,
  string
> = {

  claude:
    "anthropic/claude-sonnet-4",

  gpt:
    "openai/gpt-5",

  deepseek:
    "deepseek/deepseek-chat",

  llama:
    "meta-llama/llama-3.3-70b-instruct",

  qwen:
    "qwen/qwen3-32b",

};

export const DEFAULT_MODEL: LLMModel =
  "deepseek";