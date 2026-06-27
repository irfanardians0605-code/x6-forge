"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnalyzeButton from "./analyzebutton";

type ContractInputProps = {
  onAnalyze: (target: string) => Promise<void>;
  loading: boolean;
};

export default function ContractInput({
  onAnalyze,
  loading,
}: ContractInputProps) {
  const [target, setTarget] = useState("");

  async function handleSubmit() {
    if (!target.trim()) return;

    await onAnalyze(target.trim());
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Header */}

      <div>
        <p className="text-[11px] tracking-[0.35em] font-medium text-cyan-400 uppercase">
          Research Workspace
        </p>

        <h1 className="mt-2 text-[42px] font-bold tracking-[-0.04em] text-white leading-none">
          Analyze Smart Contract
        </h1>

        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-500">
          Paste any Base smart contract address to start the autonomous AI
          research pipeline.
        </p>
      </div>

      {/* Input */}

      <div className="mt-8">
        <label className="mb-3 block text-sm text-zinc-400">
          Contract Address
        </label>

        <div className="flex items-center gap-3">
          <input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="0x940181a94A35A4569E4529A3CDfB74e38FD98631"
            className="
              h-[54px]
              flex-1

              rounded-xl

              border
              border-zinc-700

              bg-[#0B0C10]

              px-5

              text-sm
              text-white

              outline-none

              transition-all

              placeholder:text-zinc-600

              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />

          <div onClick={handleSubmit}>
            <AnalyzeButton loading={loading} />
          </div>
        </div>
      </div>

      {/* Footer Status */}

      <div className="mt-5 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs text-zinc-500">
            Base Connected
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs text-zinc-500">
            AI Ready
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs text-zinc-500">
            7 Agents Loaded
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              loading ? "bg-cyan-400 animate-pulse" : "bg-yellow-400"
            }`}
          />

          <span className="text-xs text-zinc-500">
            {loading ? "Analyzing..." : "Waiting Contract"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}