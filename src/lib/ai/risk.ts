import { TokenMarketData } from "@/lib/services/normalize";

export type RiskReport = {
  score: number;
  level: "LOW" | "MEDIUM" | "HIGH";
  reasons: string[];
};

export function calculateRisk(
  token: TokenMarketData
): RiskReport {

  let score = 100;

  const reasons: string[] = [];

  // Liquidity
  if (token.liquidityUsd < 50000) {
    score -= 35;
    reasons.push("Very low liquidity.");
  } else if (token.liquidityUsd < 250000) {
    score -= 15;
    reasons.push("Moderate liquidity.");
  }

  // Volume
  if (token.volume24h < 10000) {
    score -= 20;
    reasons.push("Low trading volume.");
  }

  // FDV
  if (token.fdv > 500000000 && token.volume24h < 100000) {
    score -= 15;
    reasons.push("High FDV with weak trading.");
  }

  let level: RiskReport["level"] = "LOW";

  if (score < 50) {
    level = "HIGH";
  } else if (score < 80) {
    level = "MEDIUM";
  }

  return {
    score,
    level,
    reasons,
  };
}