"use client";

import { motion } from "framer-motion";

const agents = [
  {
    name: "Intake",
    description: "Input Validation",
    status: "READY",
  },
  {
    name: "Oracle",
    description: "Planning Engine",
    status: "WAITING",
  },
  {
    name: "Forge",
    description: "Market Intelligence",
    status: "WAITING",
  },
  {
    name: "Gecko",
    description: "Token Verification",
    status: "WAITING",
  },
  {
    name: "Aegis",
    description: "Risk Analysis",
    status: "WAITING",
  },
  {
    name: "Cipher",
    description: "Confidence Check",
    status: "WAITING",
  },
  {
    name: "Trace",
    description: "On-chain Insight",
    status: "WAITING",
  },
  {
    name: "Report",
    description: "Final Summary",
    status: "WAITING",
  },
];

export default function AgentSidebar() {
  return (
    <aside
      className="
        border-r
        border-zinc-800
        bg-[#0B0B0D]
        p-6
      "
    >
      {/* Header */}

      <div className="mb-8">
        <p className="text-xs tracking-[0.35em] text-cyan-400">
          AI ENGINE
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Agents
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Autonomous research pipeline.
        </p>
      </div>

      {/* List */}

      <div className="space-y-3">

        {agents.map((agent, index) => (

          <motion.div
            key={agent.name}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="
              group
              rounded-2xl

              border
              border-zinc-800

              bg-zinc-900/40

              p-4

              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:bg-cyan-500/5
            "
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    h-2.5
                    w-2.5
                    rounded-full

                    bg-zinc-600
                  "
                />

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
                className="
                  rounded-full

                  border
                  border-zinc-700

                  px-2
                  py-1

                  text-[10px]
                  tracking-[0.2em]

                  text-zinc-500
                "
              >
                {agent.status}
              </span>

            </div>

          </motion.div>

        ))}

      </div>
    </aside>
  );
}