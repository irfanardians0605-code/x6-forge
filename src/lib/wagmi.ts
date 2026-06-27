import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { base } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "X6 Forge",

 projectId:
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

  chains: [base],

  ssr: true,
});