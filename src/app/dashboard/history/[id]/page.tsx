"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";

import Report from "@/components/dashboard/researchconsole/report";

import { getHistory } from "@/lib/history/storage";

export default function HistoryReportPage() {
  const router = useRouter();

  const params = useParams();

  const report = useMemo(() => {
    const history = getHistory();

    return history.find(
      (item) => item.id === params.id
    );
  }, [params]);

  if (!report) {
    return (
      <main className="p-10">

        <button
          onClick={() => router.back()}
          className="
            mb-6
            rounded-lg
            border
            border-zinc-700
            px-4
            py-2
            text-sm
            text-zinc-400
            hover:border-cyan-500/20
            hover:text-white
          "
        >
          ← Back
        </button>

        <div
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-[#101114]
            p-10
            text-center
          "
        >
          <h2 className="text-2xl font-semibold text-white">
            Report Not Found
          </h2>

          <p className="mt-3 text-zinc-500">
            This analysis doesn't exist anymore.
          </p>
        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#09090B] p-6">

      <button
        onClick={() => router.back()}
        className="
          mb-6
          rounded-lg
          border
          border-zinc-700
          px-4
          py-2
          text-sm
          text-zinc-400
          transition-all
          hover:border-cyan-500/20
          hover:text-white
        "
      >
        ← Back to History
      </button>

      <div
        className="
          rounded-2xl
          border
          border-zinc-800
          bg-[#101114]
        "
      >
        <Report
          analysis={{
            report: report.report,
          }}
          error=""
        />
      </div>

    </main>
  );
}