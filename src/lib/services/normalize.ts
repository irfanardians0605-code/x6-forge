export type TokenMarketData = {
  name: string;
  symbol: string;
  chain: string;

  dex: string;

  pairAddress: string;

  priceUsd: number;

  liquidityUsd: number;

  volume24h: number;

  fdv: number;

  marketCap: number;
};

export function normalizeDex(pair: any): TokenMarketData {
  return {
    name: pair.baseToken.name,

    symbol: pair.baseToken.symbol,

    chain: pair.chainId,

    dex: pair.dexId,

    pairAddress: pair.pairAddress,

    priceUsd: Number(pair.priceUsd),

    liquidityUsd: Number(pair.liquidity.usd),

    volume24h: Number(pair.volume.h24),

    fdv: Number(pair.fdv),

    marketCap: Number(pair.marketCap),
  };
}