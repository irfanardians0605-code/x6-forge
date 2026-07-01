import {
  askLLM,
  DEFAULT_MODEL,
  SYSTEM_PROMPT,
} from "@/lib/llm";

import {
  buildReasoningPrompt,
} from "./prompt";

import {
  ReasoningRequest,
  ReasoningResult,
} from "./types";

export async function executeReasoning(
  request: ReasoningRequest
): Promise<ReasoningResult> {

  const prompt =
    buildReasoningPrompt(
      request.context
    );

  const response =
    await askLLM({

      model:
        DEFAULT_MODEL,

      messages: [

        {
          role: "system",
          content:
            SYSTEM_PROMPT,
        },

        {
          role: "user",
          content:
            prompt,
        },

      ],

      temperature: 0.2,

      maxTokens: 2500,

    });

  return {

    summary:
      "AI Research completed successfully.",

    reasoning:
      response.text,

  };

}