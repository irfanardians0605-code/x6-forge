"use client";

import { FolderSearch } from "lucide-react";

export default function HistoryEmpty() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-dashed
        border-zinc-800
        bg-[#0B0C10]
        py-20
        px-8
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
        "
      >
        <FolderSearch
          size={38}
          className="text-cyan-400"
        />
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-white">
        No Analysis Yet
      </h2>

      <p className="mx-auto mt-4 max-w-md leading-7 text-zinc-500">
        Your completed AI research will appear here.
        Analyze your first Base contract to start
        building your research archive.
      </p>

      <button
        className="
          mt-8
          rounded-xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-6
          py-3
          text-sm
          font-medium
          text-cyan-300
          transition-all
          hover:bg-cyan-500/20
        "
      >
        Analyze Contract
      </button>
    </div>
  );
}