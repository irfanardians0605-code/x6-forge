import { detectIntent } from "./intent";
import { buildResearchPlan } from "./planner";
import { executeResearchPlan } from "./router";

export async function researchBrain(
  prompt: string
) {
  // 1. Detect user intent
  const intent = detectIntent(prompt);

  // 2. Build research plan
  const plan = buildResearchPlan(intent);

  // 3. Execute research plan
  const result = await executeResearchPlan(
    plan,
    prompt
  );

  // 4. Return unified response
  return {
    success: true,

    intent,

    plan,

    result,
  };
}