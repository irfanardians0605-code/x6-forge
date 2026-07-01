import { getDexToken } from "@/lib/services/dexscreener";

import { normalizeDexData } from "./market-normalizer";
import { calculateMarketScore } from "./market-score";

import { buildMarketEvidence } from "@/lib/research/evidence";
import { ResearchContext } from "@/lib/research/context";

export async function executeMarketAgent(
  context: ResearchContext
): Promise<ResearchContext> {

  const dex = await getDexToken(
    context.prompt
  );

  const pair = dex.pairs?.[0];

  if (!pair) {
    throw new Error("Token not found.");
  }

  const market =
    normalizeDexData(pair);

  const risk =
    calculateMarketScore(market);

  context.market = market;

  context.risk = risk;

  context.evidence.push(
    ...buildMarketEvidence(market)
  );

  return context;

}