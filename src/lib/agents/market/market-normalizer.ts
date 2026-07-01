import { MarketData } from "./market-types";

export function normalizeDexData(
  pair: any
): MarketData {

  return {

    name:
      pair.baseToken.name,

    symbol:
      pair.baseToken.symbol,

    chain:
      pair.chainId,

    dex:
      pair.dexId,

    pairAddress:
      pair.pairAddress,

    priceUsd:
      Number(pair.priceUsd),

    liquidityUsd:
      Number(
        pair.liquidity?.usd ?? 0
      ),

    volume24h:
      Number(
        pair.volume?.h24 ?? 0
      ),

    fdv:
      Number(pair.fdv ?? 0),

    marketCap:
      Number(
        pair.marketCap ?? 0
      ),

  };

}