"use client";

import { ShieldCheck } from "lucide-react";

import { HistoryItem } from "@/lib/history/types";

import { useRouter } from "next/navigation";

type Props = {
  item: HistoryItem;
};

export default function HistoryCard({
  item,
}: Props) {

const router = useRouter();

  const badge =
    item.risk === "LOW"
      ? "border-green-500/20 bg-green-500/10 text-green-400"
      : item.risk === "MEDIUM"
      ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
      : "border-red-500/20 bg-red-500/10 text-red-400";

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-[#0B0C10]
        transition-all
        duration-300

        hover:border-cyan-500/30
        hover:shadow-[0_0_40px_rgba(6,182,212,.08)]
      "
    >
      <div className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-semibold text-white">
              {item.symbol}
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {item.token}
            </p>

          </div>

          <div className="flex items-center gap-3">

            {item.verified && (
              <div
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-3
                  py-1
                  text-xs
                  text-cyan-300
                "
              >
                <ShieldCheck size={14} />

                Verified
              </div>
            )}

            <span
              className={`
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-semibold
                ${badge}
              `}
            >
              {item.risk}
            </span>

          </div>

        </div>

        {/* Metrics */}

        <div className="mt-7 grid grid-cols-3 gap-5">

  <Metric
    label="Liquidity"
    value={`$${Number(item.liquidityUsd ?? 0).toLocaleString()}`}
  />

  <Metric
    label="24H Volume"
    value={`$${Number(item.volume24h ?? 0).toLocaleString()}`}
  />

  <Metric
    label="FDV"
    value={`$${Number(item.fdv ?? 0).toLocaleString()}`}
  />

</div>

        {/* Footer */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-zinc-800
            pt-5
          "
        >

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              {item.chain}
            </p>

            <h2 className="text-xl font-semibold text-white">
  {item.symbol || "UNKNOWN"}
</h2>


          </div>

          <p className="mt-1 text-sm text-zinc-500">
  {item.token || "Unknown Token"}
</p>

        </div>

      </div>

      {/* Action */}

<button
  onClick={() => router.push(`/dashboard/history/${item.id}`)}
  className="
    w-full
    border-t
    border-zinc-800
    bg-zinc-900/60
    py-3
    text-sm
    font-medium
    text-cyan-400
    transition-all
    hover:bg-cyan-500/10
  "
>
  View Full Report →
</button>

    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-base font-medium text-white">
        {value}
      </p>

    </div>
  );
}