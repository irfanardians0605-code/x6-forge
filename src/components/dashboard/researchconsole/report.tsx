"use client";

import { motion } from "framer-motion";

type ReportProps = {
  analysis: any;
  error: string;
};

export default function Report({
  analysis,
  error,
}: ReportProps) {

  const report = analysis?.report;

  const metrics = [
    {
  title: "Verification",
  value: report
    ? report.verification?.verified
      ? "Verified"
      : "Unverified"
    : "--",
},
{
  title: "Confidence",
  value: report
    ? `${report.verification?.confidence ?? "--"}%`
    : "--",
},
    {
      title: "Liquidity",
      value: report
        ? `$${Number(report.liquidityUsd).toLocaleString()}`
        : "--",
    },
    {
      title: "24H Volume",
      value: report
        ? `$${Number(report.volume24h).toLocaleString()}`
        : "--",
    },
    {
      title: "FDV",
      value: report
        ? `$${Number(report.fdv).toLocaleString()}`
        : "--",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-[11px] tracking-[0.35em] uppercase text-cyan-400">
            AI REPORT
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Analysis Summary
          </h2>

        </div>

        <div
          className="
            rounded-full
            border
            border-zinc-700
            px-3
            py-1
            text-[11px]
            text-zinc-500
          "
        >
          {report ? "COMPLETED" : "READY"}
        </div>

      </div>

      {/* Metrics */}

      <div className="mt-6 grid grid-cols-3 gap-3">

        {metrics.map((metric) => (

          <div
            key={metric.title}
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

            <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-500">
              {metric.title}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {metric.value}
            </h3>

          </div>

        ))}

      </div>

      {/* Insight */}

      <div
        className="
          mt-6
          rounded-xl
          border
          border-zinc-800
          bg-[#0B0C10]
          p-5
        "
      >

        <p className="text-[11px] tracking-[0.35em] uppercase text-cyan-400">
          AI INSIGHT
        </p>

        <p className="mt-3 text-sm leading-7 text-zinc-400">

          {error
            ? error
            : report
            ? report.summary
            : "Waiting for analysis..."}

        </p>

      </div>

    </motion.div>
  );
}