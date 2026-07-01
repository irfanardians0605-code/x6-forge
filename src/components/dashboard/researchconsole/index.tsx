"use client";

import { useState } from "react";

import ContractInput from "./contractinput";
import Pipeline from "./pipeline";
import SystemLog from "./systemlog";
import Report from "./report";
import { saveHistory } from "@/lib/history/storage";

export default function ResearchConsole() {

  const [analysis, setAnalysis] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleAnalyze(target: string) {

    try {

      setLoading(true);

      setError("");

      setAnalysis(null);

      const response = await fetch("/api/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          target,
        }),
      });

const result = await response.json();

console.log("===== X6 RESULT =====");
console.log(result);
console.log("=====================");

if (result?.report) {
  saveHistory({
    id: crypto.randomUUID(),

    timestamp: Date.now(),

    target,

    token: result.report.name,
    symbol: result.report.token,

    chain: result.report.chain,

    priceUsd: Number(result.report.priceUsd),

    liquidityUsd: Number(result.report.liquidityUsd),

    volume24h: Number(result.report.volume24h),

    fdv: Number(result.report.fdv),

    risk: result.report.risk,

    score: result.report.score,

    verified:
      result.report.verification?.verified ?? false,

    confidence:
      result.report.verification?.confidence ?? 0,

    report: result.report,
  });
}


      setAnalysis(result);

    } catch (err) {

      console.error(err);

      setError("Failed to analyze contract.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <section
      className="
        overflow-hidden

        rounded-[24px]

        border
        border-zinc-800

        bg-[#101114]
      "
    >

      {/* HEADER */}

      <div className="px-8 pt-6 pb-5">

        <ContractInput
          onAnalyze={handleAnalyze}
          loading={loading}
        />

      </div>

      <div className="border-t border-zinc-800" />

      {/* BODY */}

     <div
  className="
    grid

    grid-cols-1
    lg:grid-cols-12
  "
>

        <div
  className="
    lg:col-span-8

    border-b
    lg:border-b-0

    lg:border-r
    border-zinc-800
  "
>

          <Pipeline
            analysis={analysis}
            loading={loading}
          />

        </div>

        <div
  className="
    lg:col-span-4
  "
>

          <SystemLog
            analysis={analysis}
            loading={loading}
          />

        </div>

      </div>

      <div className="border-t border-zinc-800" />

      <div className="px-2 py-2">

        <Report
          analysis={analysis}
          error={error}
        />

      </div>

    </section>

  );

}