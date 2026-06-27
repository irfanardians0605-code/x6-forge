export function buildReport(
  analysis: any
) {

  return {

    // ==========================
    // Token
    // ==========================

    token:
      analysis.forge?.data?.symbol,

    name:
      analysis.forge?.data?.name,

    chain:
      analysis.forge?.data?.chain,

    // ==========================
    // Market
    // ==========================

    priceUsd:
      analysis.forge?.data?.priceUsd,

    liquidityUsd:
      analysis.forge?.data?.liquidityUsd,

    volume24h:
      analysis.forge?.data?.volume24h,

    fdv:
      analysis.forge?.data?.fdv,

    // ==========================
    // Security
    // ==========================

    score:
      analysis.aegis?.data?.score,

    risk:
      analysis.aegis?.data?.risk,

    liquidityHealth:
      analysis.aegis?.data?.liquidityHealth,

    security:
      analysis.aegis?.data?.checks,

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
        analysis.cipher?.data?.verified,

      confidence:
        analysis.cipher?.data?.confidence,

      priceMatch:
        analysis.cipher?.data?.priceMatch,

      sources:
        analysis.cipher?.data?.sources,

    },

    // ==========================
    // AI Reasoning
    // ==========================

    summary:
      analysis.trace?.data?.insight,

    reasoning:
      analysis.trace?.data?.reasoning,

  };

}