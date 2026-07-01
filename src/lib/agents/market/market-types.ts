export interface MarketData {

  name: string;

  symbol: string;

  chain: string;

  dex: string;

  pairAddress: string;

  priceUsd: number;

  liquidityUsd: number;

  volume24h: number;

  fdv: number;

  marketCap?: number;

}