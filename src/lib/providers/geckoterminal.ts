export async function getGeckoData(
  network: string,
  contractAddress: string
) {
  const response = await fetch(
    `https://api.geckoterminal.com/api/v2/networks/${network}/tokens/${contractAddress}`,
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "GeckoTerminal request failed"
    );
  }

  return response.json();
}