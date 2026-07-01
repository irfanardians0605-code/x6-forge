import { ResearchIntent } from "./intent";

export type ResearchPlan = {
  intent: ResearchIntent;
  tools: string[];
  description: string;
};

export function buildResearchPlan(
  intent: ResearchIntent
): ResearchPlan {

  switch (intent) {

    case "analyze":

      return {
        intent,
        tools: [
          "DexScreener",
          "GeckoTerminal",
          "OpenAI",
        ],
        description:
          "Collect market data and generate a research report.",
      };

    case "compare":

      return {
        intent,
        tools: [
          "DexScreener",
          "GeckoTerminal",
          "OpenAI",
        ],
        description:
          "Compare multiple assets and summarize the result.",
      };

    case "holder":

      return {
        intent,
        tools: [
          "HolderAnalyzer",
          "OpenAI",
        ],
        description:
          "Analyze token holders and generate insights.",
      };

    case "contract":

      return {
        intent,
        tools: [
          "ContractScanner",
          "OpenAI",
        ],
        description:
          "Inspect smart contract and explain findings.",
      };

    case "risk":

      return {
        intent,
        tools: [
          "RiskEngine",
          "OpenAI",
        ],
        description:
          "Evaluate project risks and summarize them.",
      };

    case "explain":

      return {
        intent,
        tools: [
          "OpenAI",
        ],
        description:
          "Explain the requested topic.",
      };

    default:

      return {
        intent,
        tools: [
          "OpenAI",
        ],
        description:
          "General AI research.",
      };

  }

}