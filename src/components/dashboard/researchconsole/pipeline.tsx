"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Circle, XCircle } from "lucide-react";

const agents = [
  {
    key: "intake",
    name: "Intake",
    description: "Validate Smart Contract",
  },
  {
    key: "oracle",
    name: "Oracle",
    description: "Build Research Plan",
  },
  {
    key: "forge",
    name: "Forge",
    description: "Market Intelligence",
  },
  {
    key: "gecko",
    name: "Gecko",
    description: "Liquidity Analysis",
  },
  {
    key: "aegis",
    name: "Aegis",
    description: "Risk Assessment",
  },
  {
    key: "cipher",
    name: "Cipher",
    description: "Confidence Score",
  },
  {
    key: "trace",
    name: "Trace",
    description: "On-chain Intelligence",
  },
];

type PipelineProps = {
  analysis: any;
  loading: boolean;
};

export default function Pipeline({
  analysis,
  loading,
}: PipelineProps) {
  return (
    <div className="p-6">
      {/* Header */}

      <div>
        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">
          AI PIPELINE
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Autonomous Workflow
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Every AI agent executes sequentially.
        </p>
      </div>

      {/* Agents */}

      <div className="mt-8 space-y-4">
        {agents.map((agent, index) => {
          const state = analysis?.[agent.key];

          let status = "waiting";

          if (loading) {
            status = "running";
          }

          if (state?.status) {
            status = state.status;
          }

          return (
            <motion.div
              key={agent.key}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                rounded-xl
                border
                border-zinc-800
                bg-[#0B0C10]
                p-4
                transition-all
                hover:border-cyan-400/20
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {status === "success" && (
                    <CheckCircle2
                      size={18}
                      className="text-green-400"
                    />
                  )}

                  {status === "running" && (
                    <Loader2
                      size={18}
                      className="animate-spin text-cyan-400"
                    />
                  )}

                  {status === "error" && (
                    <XCircle
                      size={18}
                      className="text-red-400"
                    />
                  )}

                  {status === "waiting" && (
                    <Circle
                      size={18}
                      className="text-zinc-600"
                    />
                  )}

                  <div>
                    <h3 className="font-medium text-white">
                      {agent.name}
                    </h3>

                    <p className="text-xs text-zinc-500">
                      {agent.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs font-medium ${
                    status === "success"
                      ? "text-green-400"
                      : status === "running"
                      ? "text-cyan-400"
                      : status === "error"
                      ? "text-red-400"
                      : "text-zinc-500"
                  }`}
                >
                  {status}
                </span>
              </div>

              <div
                className="
                  mt-4
                  h-[3px]
                  overflow-hidden
                  rounded-full
                  bg-zinc-800
                "
              >
                {status === "success" && (
                  <div className="h-full w-full bg-green-400" />
                )}

                {status === "running" && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "linear",
                    }}
                    className="h-full w-1/2 bg-cyan-400"
                  />
                )}

                {status === "error" && (
                  <div className="h-full w-full bg-red-400" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}