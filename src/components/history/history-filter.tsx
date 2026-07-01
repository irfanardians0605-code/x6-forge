"use client";

type Props = {
  risk: string;
  onChange: (risk: string) => void;
};

const options = [
  "ALL",
  "LOW",
  "MEDIUM",
  "HIGH",
];

export default function HistoryFilter({
  risk,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">

      {options.map((option) => (

        <button
          key={option}
          onClick={() => onChange(option)}
          className={`
            rounded-xl
            border
            px-4
            py-2
            text-sm
            transition-all

            ${
              risk === option
                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                : "border-zinc-800 bg-[#0B0C10] text-zinc-400 hover:border-zinc-700"
            }
          `}
        >
          {option}
        </button>

      ))}

    </div>
  );
}