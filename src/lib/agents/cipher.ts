import {
  AgentResult,
  ForgeData,
} from "../types/analysis";

export async function cipher(
  forgeData: ForgeData,
  geckoData?: any
): Promise<AgentResult> {

  const checks = {
    pairExists:
      !!forgeData?.pairAddress,

    liquidityDetected:
      (forgeData?.liquidityUsd || 0) > 0,

    volumeDetected:
      (forgeData?.volume24h || 0) > 0,

    fdvDetected:
      (forgeData?.fdv || 0) > 0,
  };

  const passed =
    Object.values(checks)
      .filter(Boolean)
      .length;

  let confidence =
    Math.round(
      (passed / 4) * 100
    );

  const dexPrice =
    Number(
      forgeData?.priceUsd || 0
    );

  const geckoPrice =
    Number(
      geckoData?.attributes?.price_usd || 0
    );

  let priceMatch = false;

  if (
    dexPrice > 0 &&
    geckoPrice > 0
  ) {

    const diff =
      Math.abs(
        dexPrice - geckoPrice
      ) / dexPrice;

    priceMatch =
      diff < 0.03;
  }

  if (priceMatch)
    confidence += 10;

  if (confidence > 100)
    confidence = 100;

  return {
    name: "Cipher",
    status: "success",

    summary:
      `Verification ${confidence}%`,

    data: {
      verified:
        confidence >= 75,

      confidence,

      priceMatch,

      sources:
        geckoPrice > 0 ? 2 : 1,

      checks,
    },
  };
}