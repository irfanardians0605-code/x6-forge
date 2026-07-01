import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askOpenAI(
  prompt: string
) {
  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-5.5",
    input: prompt,
  });

  return response.output_text;
}