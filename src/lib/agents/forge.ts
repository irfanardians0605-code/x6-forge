import { AgentResult } from "../types/analysis";
import { getDexData } from "../providers/dexscreener";

export async function forge(
  target: string
): Promise<AgentResult> {
  try {
    const dexData =
      await getDexData(target);

    const pairs =
  dexData?.pairs || [];

const pair =
  pairs.sort(
    (a: any, b: any) =>
      (b?.liquidity?.usd || 0) -
      (a?.liquidity?.usd || 0)
  )[0];

    if (!pair) {
      return {
        name: "Forge",
        status: "warning",
        summary: "Token not found",
      };
    }

    return {
  name: "Forge",
  status: "success",
  summary: `${pair.baseToken.symbol} detected`,
  data: {
    name: pair.baseToken.name,
    symbol: pair.baseToken.symbol,
    chain: pair.chainId,

    priceUsd: pair.priceUsd,

    liquidityUsd:
      pair.liquidity?.usd,

    volume24h:
      pair.volume?.h24,

    fdv:
      pair.fdv,

    pairAddress:
      pair.pairAddress,

    pairCount:
      pairs.length,
  },
};

  } catch {
    return {
      name: "Forge",
      status: "error",
      summary: "DexScreener unavailable",
    };
  }
}