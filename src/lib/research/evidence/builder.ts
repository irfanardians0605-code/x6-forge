import { Evidence } from "./types";

import { MarketData } from "@/lib/agents/market/market-types";

export function buildMarketEvidence(
  market: MarketData
): Evidence[] {

  return [

    {

      id: crypto.randomUUID(),

      source: "DexScreener",

      category: "market",

      title: "Market Data",

      data: market,

      confidence: 100,

      collectedAt: Date.now(),

    },

  ];

}