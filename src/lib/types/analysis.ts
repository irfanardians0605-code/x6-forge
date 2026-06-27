export type AgentStatus =
  | "success"
  | "warning"
  | "error";

export interface AgentResult {
  name: string;
  status: AgentStatus;
  summary: string;
  data?: any;
}

export interface AnalysisInput {
  target: string;
}

export interface AnalysisResult {
  target: string;

  intake: AgentResult;
  oracle: AgentResult;
  forge: AgentResult;
  aegis: AgentResult;
  cipher: AgentResult;
  trace: AgentResult;
  gecko: AgentResult;
}

export interface RiskData {
  score: number;

  risk: "LOW" | "MEDIUM" | "HIGH";

  liquidityHealth: string;

  liquidity: number;

  volume: number;

  fdv: number;
}

export interface ForgeData {
  name: string;
  symbol: string;
  chain: string;

  priceUsd: string;

  liquidityUsd: number;

  volume24h: number;

  fdv: number;

  pairAddress: string;

  pairCount: number;
}