"use client";

import { motion } from "framer-motion";

export default function ResearchConsole() {
  return (
    <section className="flex flex-col bg-[#09090B] p-8">

      {/* Header */}

      <div className="mb-8">
        <p className="text-xs tracking-[0.35em] text-cyan-400">
          RESEARCH CONSOLE
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Smart Contract Analysis
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Paste a Base contract address to begin autonomous AI research.
        </p>
      </div>

      {/* Input */}

      <div
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900/40
          p-6
        "
      >
        <label className="mb-3 block text-sm text-zinc-400">
          Contract Address
        </label>

        <input
          type="text"
          placeholder="0x940181a94A35A4569E4529A3CDfB74e38FD98631"
          className="
            w-full
            rounded-xl
            border
            border-zinc-700
            bg-[#09090B]
            px-4
            py-3
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-zinc-600
            focus:border-cyan-400
          "
        />

        <button
          className="
            mt-5
            rounded-xl
            bg-cyan-400
            px-6
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-cyan-300
          "
        >
          Analyze Contract
        </button>
      </div>

      {/* Console */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="
          mt-8
          flex-1

          rounded-2xl

          border
          border-zinc-800

          bg-zinc-900/30

          p-6
        "
      >
        <p className="mb-4 text-sm tracking-[0.25em] text-cyan-400">
          CONSOLE
        </p>

        <div className="space-y-3 font-mono text-sm">

          <p className="text-zinc-500">
            Waiting for analysis...
          </p>

          <p className="text-zinc-700">
            &gt; AI engine idle
          </p>

          <p className="text-zinc-700">
            &gt; Awaiting contract input
          </p>

        </div>

      </motion.div>

    </section>
  );
}