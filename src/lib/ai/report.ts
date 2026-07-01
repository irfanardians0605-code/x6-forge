import { ResearchContext } from "@/lib/research/context";

import {
  ReasoningResult,
} from "@/lib/research/reasoning";

export type ResearchReport = {

  summary: string;

  reasoning: string;

  market: NonNullable<ResearchContext["market"]>;

  risk: NonNullable<ResearchContext["risk"]>;

  evidence: ResearchContext["evidence"];

};

export function buildResearchReport(

  context: ResearchContext,

  reasoning: ReasoningResult

): ResearchReport {

  if (!context.market || !context.risk) {

    throw new Error(
      "ResearchContext is incomplete."
    );

  }

  return {

    summary:
      reasoning.summary,

    reasoning:
      reasoning.reasoning,

    market:
      context.market,

    risk:
      context.risk,

    evidence:
      context.evidence,

  };

}