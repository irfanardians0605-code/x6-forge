"use client";

type Props = {
  total: number;
  low: number;
 medium: number;
  high: number;
};

export default function HistoryStats({
  total,
  low,
  medium,
  high,
}: Props) {
  const stats = [
    {
      title: "Total Analysis",
      value: total,
      color: "text-cyan-400",
    },
    {
      title: "Low Risk",
      value: low,
      color: "text-green-400",
    },
    {
      title: "Medium Risk",
      value: medium,
      color: "text-yellow-400",
    },
    {
      title: "High Risk",
      value: high,
      color: "text-red-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="
            rounded-2xl
            border
            border-zinc-800
            bg-[#0B0C10]
            p-5
            transition-all
            hover:border-cyan-500/20
          "
        >

          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {stat.title}
          </p>

          <h2
            className={`mt-3 text-3xl font-bold ${stat.color}`}
          >
            {stat.value}
          </h2>

        </div>

      ))}

    </div>
  );
}