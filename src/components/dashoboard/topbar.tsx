"use client";

import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        flex
        h-[72px]
        items-center
        justify-between

        border-b
        border-zinc-800

        bg-[#09090B]/80
        px-8

        backdrop-blur-xl
      "
    >
      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-5"
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border
            border-cyan-400/20

            bg-cyan-500/5
          "
        >
          <span className="text-lg font-bold text-cyan-300">
            X6
          </span>
        </div>

        <div>
          <h1 className="text-lg font-semibold tracking-wide text-white">
            X6 FORGE
          </h1>

          <p className="text-xs text-zinc-500">
            AI Research Operating System
          </p>
        </div>
      </motion.div>

      {/* Center */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          hidden
          items-center
          gap-3

          rounded-full

          border
          border-cyan-400/20

          bg-cyan-500/5

          px-4
          py-2

          md:flex
        "
      >
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        <span className="text-xs tracking-[0.2em] text-cyan-300">
          BASE MAINNET
        </span>
      </motion.div>

      {/* Right */}

      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="
            rounded-xl
            border
            border-zinc-800

            bg-zinc-900/50

            px-4
            py-2

            text-sm
            text-zinc-400
          "
        >
          Wallet Connected
        </div>
      </motion.div>
    </header>
  );
}