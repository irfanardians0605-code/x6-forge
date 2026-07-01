export type TargetType =
  | "contract"
  | "wallet"
  | "transaction"
  | "token"
  | "question"
  | "unknown";

export interface MCPTarget {

  type: TargetType;

  value: string;

}

export interface MCPResult {

  success: boolean;

  target: MCPTarget;

  data?: any;

  error?: string;

}