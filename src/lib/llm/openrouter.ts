import {
  LLMRequest,
  LLMResponse,
} from "./types";

import {
  MODEL_MAP,
} from "./models";

export async function askOpenRouter(
  request: LLMRequest
): Promise<LLMResponse> {

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",

      headers: {

        Authorization:
          `Bearer ${process.env.OPENROUTER_API_KEY}`,

        "Content-Type":
          "application/json",

      },

      body: JSON.stringify({

        model:
          MODEL_MAP[
            request.model
          ],

        messages:
          request.messages,

        temperature:
          request.temperature ?? 0.3,

        max_tokens:
          request.maxTokens ?? 2500,

      }),

    }
  );

if (!response.ok) {

  const error = await response.text();

  console.error("OpenRouter Error:", error);

  throw new Error(
    `OpenRouter Error: ${error}`
  );

}

  const data =
    await response.json();

  return {

    text:
      data.choices?.[0]?.message?.content ??
      "",

    model:
      MODEL_MAP[
        request.model
      ],

    provider:
      "openrouter",

  };

}