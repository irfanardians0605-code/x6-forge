const DEX_API = "https://api.dexscreener.com/latest/dex";

function extractToken(query: string) {

  return query
    .replace(/^analyze\s+/i, "")
    .trim();

}

export async function getDexToken(
  query: string
) {

  const token = extractToken(query);

  const response = await fetch(
    `${DEX_API}/search?q=${encodeURIComponent(token)}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch DexScreener.");
  }

  return response.json();

}