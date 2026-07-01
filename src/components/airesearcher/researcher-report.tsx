"use client";

type Props = {
  report: any | null;
};

function formatCurrency(value?: number) {
  if (value === undefined || value === null) {
    return "-";
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function ResearchReport({
  report,
}: Props) {

  if (
    !report ||
    !report.market ||
    !report.risk
  ) {
    return (
      <div
        className="
          flex
          h-full
          items-center
          justify-center
          rounded-2xl
          border
          border-zinc-800
          bg-[#0B0C10]
        "
      >
        <div className="text-center">

          <p className="text-lg font-semibold text-white">
            No Research Yet
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Analyze a token to generate a report.
          </p>

        </div>
      </div>
    );
  }

  return (

    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-[#0B0C10]
        p-6
      "
    >

      <h2 className="text-xl font-semibold text-white">
        Research Summary
      </h2>

      <p className="mt-4 whitespace-pre-line text-zinc-300">
        {report.summary}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <Card
          title="Price"
          value={`$${formatCurrency(
            report.market?.priceUsd
          )}`}
        />

        <Card
          title="Liquidity"
          value={`$${formatCurrency(
            report.market?.liquidityUsd
          )}`}
        />

        <Card
          title="24H Volume"
          value={`$${formatCurrency(
            report.market?.volume24h
          )}`}
        />

        <Card
          title="FDV"
          value={`$${formatCurrency(
            report.market?.fdv
          )}`}
        />

        <Card
          title="Risk"
          value={
            report.risk?.level ??
            "-"
          }
        />

        <Card
          title="Score"
          value={
            report.risk?.score !== undefined
              ? `${report.risk.score}/100`
              : "-"
          }
        />

      </div>

    </div>

  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-zinc-800
        bg-[#111216]
        p-4
      "
    >
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}