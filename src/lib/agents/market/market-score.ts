import { MarketData } from "./market-types";

export function calculateMarketScore(
  market: MarketData
) {

  let score = 100;

  const reasons: string[] = [];

  if (market.liquidityUsd < 50000) {

    score -= 40;

    reasons.push(
      "Very low liquidity."
    );

  } else if (
    market.liquidityUsd < 250000
  ) {

    score -= 20;

    reasons.push(
      "Low liquidity."
    );

  }

  if (market.volume24h < 10000) {

    score -= 20;

    reasons.push(
      "Low trading volume."
    );

  }

  return {

    score,

    level:
      score >= 80
        ? "LOW"
        : score >= 50
        ? "MEDIUM"
        : "HIGH",

    reasons,

  };

}