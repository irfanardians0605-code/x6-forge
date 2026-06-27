import { AgentResult } from "../types/analysis";
import { getGeckoData } from "../providers/geckoterminal";

export async function gecko(
  network: string,
  target: string
): Promise<AgentResult> {

  try {

    const data =
  await getGeckoData(
    network,
    target
  );

    return {
      name: "Gecko",
      status: "success",
      summary:
        "GeckoTerminal verified",

      data,
    };

  } catch {

    return {
      name: "Gecko",
      status: "warning",
      summary:
        "GeckoTerminal unavailable",
    };
  }
}