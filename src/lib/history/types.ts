export interface HistoryItem {
  id: string;

  timestamp: number;

  target: string;

  token: string;

  symbol: string;

  chain: string;

  priceUsd: number;

  liquidityUsd: number;

  volume24h: number;

  fdv: number;

  risk: "LOW" | "MEDIUM" | "HIGH";

  score: number;

  verified: boolean;

  confidence: number;

  report: any;
}