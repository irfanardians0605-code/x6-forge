"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function HistorySearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search token, symbol or contract..."
        className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-[#0B0C10]
          py-3
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          transition

          placeholder:text-zinc-600

          focus:border-cyan-500/30
        "
      />

    </div>
  );
}