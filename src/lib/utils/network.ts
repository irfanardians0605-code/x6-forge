export function detectNetwork(
  chainId?: string
) {

  switch (
    chainId?.toLowerCase()
  ) {

    case "base":
      return "base";

    case "ethereum":
      return "eth";

    case "bsc":
      return "bsc";

    case "arbitrum":
      return "arbitrum";

    default:
      return "base";
  }
}