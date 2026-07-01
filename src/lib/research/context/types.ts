import { MarketData } from "@/lib/agents/market/market-types";

import { Evidence } from "../evidence";

export interface ResearchContext {

  prompt: string;

  market?: MarketData;

  risk?: any;

  evidence: Evidence[];

  contract?: any;

  wallet?: any;

  holder?: any;

  news?: any;

}