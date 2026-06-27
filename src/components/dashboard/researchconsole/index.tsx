"use client";

import { useState } from "react";

import ContractInput from "./contractinput";
import Pipeline from "./pipeline";
import SystemLog from "./systemlog";
import Report from "./report";

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

setAnalysis(result);

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
          grid-cols-12
        "
      >

        <div
          className="
            col-span-8

            border-r
            border-zinc-800
          "
        >

          <Pipeline
            analysis={analysis}
            loading={loading}
          />

        </div>

        <div className="col-span-4">

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