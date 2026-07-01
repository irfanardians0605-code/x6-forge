import {
  ReasoningResult,
} from "./types";

export function formatReasoningReport(
  result: ReasoningResult
): string {

  return `# Executive Summary

${result.summary}

---

# AI Reasoning

${result.reasoning}
`;

}