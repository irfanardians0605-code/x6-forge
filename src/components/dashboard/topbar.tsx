"use client";

import { motion } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Topbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        sticky
        top-0
        z-50
        h-[68px]
        border-b
        border-zinc-800
        bg-[#09090B]/90
        backdrop-blur-xl
      "
    >
      <div className="flex h-full items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-3">

<div
  className="
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-lg
    bg-gradient-to-br
    from-cyan-400
    to-blue-600
    font-bold
    text-white
  "
>
  X6
</div>

          <div>

            <h1 className="text-lg font-semibold text-white">
              X6 Forge
            </h1>

            <p className="text-[11px] text-zinc-500">
              Autonomous Crypto Research
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/5
              px-3
              py-1.5
            "
          >

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-[11px] tracking-[0.2em] text-cyan-300">
              BASE
            </span>

          </div>

          <ConnectButton.Custom>
            {({
              account,
              chain,
              mounted,
              openAccountModal,
              openChainModal,
            }) => {

              const ready = mounted;

              const connected =
                ready &&
                account &&
                chain;

              if (!connected) return null;

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="
                      rounded-lg
                      border
                      border-red-500/30
                      bg-red-500/10
                      px-4
                      py-2
                      text-sm
                      text-red-300
                    "
                  >
                    Wrong Network
                  </button>
                );
              }

              return (
                <button
                  onClick={openAccountModal}
                  className="
                    rounded-lg
                    border
                    border-zinc-700
                    bg-zinc-900
                    px-4
                    py-2
                    text-sm
                    text-zinc-300
                    transition-all
                    hover:border-cyan-400/20
                    hover:text-white
                  "
                >
                  {account.displayName}
                </button>
              );
            }}
          </ConnectButton.Custom>

        </div>

      </div>

    </motion.header>
  );
}