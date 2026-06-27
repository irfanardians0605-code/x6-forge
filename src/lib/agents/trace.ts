import {
  AgentResult,
  ForgeData,
  RiskData,
} from "../types/analysis";

type BaseScanData = {
  verified?: boolean;
  proxy?: boolean;
  sourceCode?: boolean;
  abi?: boolean;
  compiler?: string | null;
  license?: string | null;
  optimization?: boolean;
};

export async function trace(
  forgeData: ForgeData,
  aegisData: RiskData,
  basescan?: BaseScanData
): Promise<AgentResult> {

  const liquidity =
    forgeData?.liquidityUsd || 0;

  const volume =
    forgeData?.volume24h || 0;

  const risk =
    aegisData?.risk || "UNKNOWN";

  const token =
    forgeData?.name || "Unknown Token";

  const chain =
    forgeData?.chain || "Unknown";

  const reasoning: string[] = [];

  // ==========================
  // Contract Analysis
  // ==========================

  reasoning.push(
    `${token} is deployed on ${chain}.`
  );

  if (basescan?.verified)
    reasoning.push(
      "The smart contract is verified on BaseScan."
    );
  else
    reasoning.push(
      "The smart contract has not been verified."
    );

  if (basescan?.sourceCode)
    reasoning.push(
      "Public source code is available."
    );

  if (basescan?.abi)
    reasoning.push(
      "Public ABI is available."
    );

  if (basescan?.compiler)
    reasoning.push(
      `Compiled using ${basescan.compiler}.`
    );

  if (basescan?.license)
    reasoning.push(
      `License: ${basescan.license}.`
    );

  if (basescan?.optimization)
    reasoning.push(
      "Compiler optimization enabled."
    );

  if (basescan?.proxy)
    reasoning.push(
      "Proxy contract detected."
    );
  else
    reasoning.push(
      "No proxy contract detected."
    );

  // ==========================
  // Market Analysis
  // ==========================

  if (
    liquidity > 1000000 &&
    volume > 100000
  ) {

    reasoning.push(
      "Liquidity is strong with healthy trading activity."
    );

  } else if (
    liquidity > 250000
  ) {

    reasoning.push(
      "Liquidity is acceptable with moderate market activity."
    );

  } else {

    reasoning.push(
      "Liquidity is relatively low and should be monitored."
    );

  }

  // ==========================
  // Risk Analysis
  // ==========================

  if (risk === "LOW") {

    reasoning.push(
      "Overall security profile is considered LOW RISK."
    );

  } else if (
    risk === "MEDIUM"
  ) {

    reasoning.push(
      "Overall security profile indicates MEDIUM RISK."
    );

  } else {

    reasoning.push(
      "Overall security profile indicates HIGH RISK."
    );

  }

  const insight =
    reasoning.join(" ");

  return {

    name: "Trace",

    status: "success",

    summary: insight,

    data: {

      insight,

      reasoning,

      liquidity,

      volume,

      risk,

      verified:
        basescan?.verified,

      compiler:
        basescan?.compiler,

      proxy:
        basescan?.proxy,

    },

  };

}