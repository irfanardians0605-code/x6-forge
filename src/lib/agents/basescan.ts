const ETHERSCAN_API =
  "https://api.etherscan.io/v2/api";

export async function basescan(
  contract: string
) {
  try {
    const apiKey =
      process.env.BASESCAN_API_KEY;

    if (!apiKey) {
      return {
        name: "BaseScan",
        status: "error",
        summary: "BASESCAN_API_KEY missing",
      };
    }

    const url =
      `${ETHERSCAN_API}` +
      `?chainid=8453` +
      `&module=contract` +
      `&action=getsourcecode` +
      `&address=${contract}` +
      `&apikey=${apiKey}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    const json =
      await response.json();

    console.log(json);

    if (
      !json.result ||
      !Array.isArray(json.result) ||
      json.result.length === 0
    ) {
      return {
        name: "BaseScan",
        status: "error",
        summary:
          json.message ||
          json.result ||
          "Contract not found",
      };
    }

    const data =
      json.result[0];

    const verified =
      data.ABI !==
      "Contract source code not verified";

    return {
      name: "BaseScan",

      status: "success",

      summary: verified
        ? "Verified contract detected"
        : "Contract not verified",

      data: {

        contractName:
          data.ContractName || null,

        compiler:
          data.CompilerVersion || null,

        compilerType:
          data.CompilerType || null,

        optimization:
          data.OptimizationUsed === "1",

        runs:
          Number(
            data.Runs || 0
          ),

        evmVersion:
          data.EVMVersion || null,

        license:
          data.LicenseType || null,

        verified,

        sourceCode:
          verified,

        abi:
          verified,

        proxy:
          data.Proxy === "1",

        implementation:
          data.Implementation || null,

        constructorArguments:
          data.ConstructorArguments || null,

        swarmSource:
          data.SwarmSource || null,

      },

    };

  } catch (err) {

    return {

      name: "BaseScan",

      status: "error",

      summary:
        err instanceof Error
          ? err.message
          : "Unknown Error",

    };

  }

}