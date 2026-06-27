import {
  AgentResult,
  ForgeData,
} from "../types/analysis";

type BaseScanData = {
  verified?: boolean;
  proxy?: boolean;
  sourceCode?: boolean;
  abi?: boolean;
  compiler?: string | null;
  optimization?: boolean;
  license?: string | null;
};

export async function aegis(
  forgeData: ForgeData,
  basescan?: BaseScanData
): Promise<AgentResult> {

  let score = 100;

  const liquidity =
    forgeData?.liquidityUsd || 0;

  const volume =
    forgeData?.volume24h || 0;

  const fdv =
    forgeData?.fdv || 0;

  // ==========================
  // Market Risk
  // ==========================

  if (liquidity < 50000)
    score -= 40;
  else if (liquidity < 250000)
    score -= 20;

  if (volume < 10000)
    score -= 20;

  if (
    fdv > 0 &&
    liquidity / fdv < 0.02
  )
    score -= 10;

  // ==========================
  // Contract Security
  // ==========================

  if (!basescan?.verified)
    score -= 20;

  if (!basescan?.sourceCode)
    score -= 10;

  if (!basescan?.abi)
    score -= 10;

  if (basescan?.proxy)
    score -= 5;

  if (!basescan?.optimization)
    score -= 5;

  // ==========================
  // Clamp Score
  // ==========================

  score = Math.max(
    0,
    Math.min(100, score)
  );

  // ==========================
  // Risk Level
  // ==========================

  let risk:
    | "LOW"
    | "MEDIUM"
    | "HIGH";

  if (score >= 80)
    risk = "LOW";
  else if (score >= 50)
    risk = "MEDIUM";
  else
    risk = "HIGH";

  // ==========================
  // Liquidity Health
  // ==========================

  let liquidityHealth =
    "WEAK";

  if (liquidity > 1000000)
    liquidityHealth = "STRONG";
  else if (liquidity > 250000)
    liquidityHealth = "HEALTHY";

  // ==========================
  // Security Checklist
  // ==========================

  const checks = {
    verified:
      !!basescan?.verified,

    sourceCode:
      !!basescan?.sourceCode,

    abi:
      !!basescan?.abi,

    proxy:
      !!basescan?.proxy,

    optimization:
      !!basescan?.optimization,

    compiler:
      basescan?.compiler,

    license:
      basescan?.license,
  };

  return {
    name: "Aegis",

    status: "success",

    summary:
      `Risk ${risk} (${score}/100)`,

    data: {
      score,

      risk,

      liquidityHealth,

      liquidity,

      volume,

      fdv,

      checks,
    },
  };
}