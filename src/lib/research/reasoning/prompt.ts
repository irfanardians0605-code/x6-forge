import {
  ResearchContext,
} from "@/lib/research/context";

export function buildReasoningPrompt(
  context: ResearchContext
): string {

  return `
You are X6 Research AI.

Your task is to analyze the following research evidence and produce a professional research report.

Rules:

- Never fabricate information.
- Only use available evidence.
- If information is unavailable, clearly state it.
- Be objective and concise.
- Distinguish facts from assumptions.

────────────────────────

USER REQUEST

${context.prompt}

────────────────────────

MARKET DATA

${JSON.stringify(
  context.market,
  null,
  2
)}

────────────────────────

RISK ANALYSIS

${JSON.stringify(
  context.risk,
  null,
  2
)}

────────────────────────

AVAILABLE EVIDENCE

${context.evidence
  .map(
    (item) =>
      `• ${item.title}: ${JSON.stringify(item.data)}`
  )
  .join("\n")}

────────────────────────

Generate a report with the following sections:

1. Executive Summary

2. Market Overview

3. Liquidity Analysis

4. Risk Assessment

5. Key Findings

6. Final Conclusion
`;
}