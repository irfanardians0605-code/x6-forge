"use client";

import { motion } from "framer-motion";

type SystemLogProps = {
  analysis: any;
  loading: boolean;
};

export default function SystemLog({
  analysis,
  loading,
}: SystemLogProps) {

  const logs = analysis
    ? [
        {
          type: analysis.intake.name,
          message: analysis.intake.summary,
        },
        {
          type: analysis.oracle.name,
          message: analysis.oracle.summary,
        },
        {
          type: analysis.forge.name,
          message: analysis.forge.summary,
        },
        {
          type: analysis.gecko.name,
          message: analysis.gecko.summary,
        },
        {
          type: analysis.aegis.name,
          message: analysis.aegis.summary,
        },
        {
          type: analysis.cipher.name,
          message: analysis.cipher.summary,
        },
        {
          type: analysis.trace.name,
          message: analysis.trace.summary,
        },
      ]
    : [
        {
          type: "SYSTEM",
          message: "X6 Forge initialized...",
        },
        {
          type: "NETWORK",
          message: "Connected to Base Mainnet...",
        },
        {
          type: "ENGINE",
          message: loading
            ? "Analyzing contract..."
            : "Waiting for contract address...",
        },
      ];

  return (
    <div className="h-full flex flex-col">

      {/* Header */}

      <div className="px-6 pt-6 pb-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[11px] tracking-[0.35em] uppercase text-cyan-400">
              Live Terminal
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              System Log
            </h2>

          </div>

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800" />

      {/* Terminal */}

      <div
        className="
          flex-1
          bg-[#0B0C10]
          px-6
          py-5
          font-mono
          text-[13px]
          leading-7
        "
      >

        {logs.map((log, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="mb-2 flex gap-3"
          >

            <span className="text-cyan-400">
              &gt;
            </span>

            <span className="text-green-400">
              [{log.type}]
            </span>

            <span className="text-zinc-400">
              {log.message}
            </span>

          </motion.div>

        ))}

        <motion.div
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
          }}
          className="
            mt-3
            h-4
            w-2
            bg-green-400
          "
        />

      </div>

    </div>
  );
}