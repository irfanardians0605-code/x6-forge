export async function getDexData(
  contractAddress: string
) {
  const response = await fetch(
    `https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("DexScreener failed");
  }

  const data = await response.json();

  return data;
}