import {
  LLMRequest,
  LLMResponse,
} from "./types";

import {
  askOpenRouter,
} from "./openrouter";

export async function askLLM(
  request: LLMRequest
): Promise<LLMResponse> {

  return askOpenRouter(
    request
  );

}