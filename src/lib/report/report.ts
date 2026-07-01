export function buildReport(
  analysis: any
) {

  return {

    // ==========================
    // Token
    // ==========================

    token:
    analysis.forge?.data?.symbol ?? "UNKNOWN",

    name:
    analysis.forge?.data?.name ?? "Unknown Token",

    chain:
    analysis.forge?.data?.chain ?? "BASE",

    // ==========================
    // Market
    // ==========================

    priceUsd:
    Number(analysis.forge?.data?.priceUsd ?? 0),

    liquidityUsd:
   Number(analysis.forge?.data?.liquidityUsd ?? 0),

    volume24h:
     Number(analysis.forge?.data?.volume24h ?? 0),

    fdv:
    Number(analysis.forge?.data?.fdv ?? 0),

    // ==========================
    // Security
    // ==========================

    score:
    Number(analysis.aegis?.data?.score ?? 0),

    risk:
    analysis.aegis?.data?.risk ?? "HIGH",

    liquidityHealth:
    analysis.aegis?.data?.liquidityHealth ?? "UNKNOWN",

    security:
    analysis.aegis?.data?.checks ?? [],

    // ==========================
    // Contract
    // ==========================

    contract: {

      verified:
        analysis.basescan?.data?.verified,

      sourceCode:
        analysis.basescan?.data?.sourceCode,

      abi:
        analysis.basescan?.data?.abi,

      proxy:
        analysis.basescan?.data?.proxy,

      compiler:
        analysis.basescan?.data?.compiler,

      compilerType:
        analysis.basescan?.data?.compilerType,

      optimization:
        analysis.basescan?.data?.optimization,

      license:
        analysis.basescan?.data?.license,

      implementation:
        analysis.basescan?.data?.implementation,

    },

    // ==========================
    // Verification
    // ==========================

    verification: {

  verified:
    analysis.cipher?.data?.verified ?? false,

  confidence:
    Number(analysis.cipher?.data?.confidence ?? 0),

  priceMatch:
    analysis.cipher?.data?.priceMatch ?? false,

  sources:
    analysis.cipher?.data?.sources ?? [],

},
    // ==========================
    // AI Reasoning
    // ==========================

   summary:
  analysis.trace?.data?.insight ??
  "No analysis available.",

reasoning:
  analysis.trace?.data?.reasoning ?? [],

  };

}