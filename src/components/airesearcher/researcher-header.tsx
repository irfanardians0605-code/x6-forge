"use client";

import ResearcherModel from "./researcher-model";

export default function ResearcherHeader() {
  return (
    <div className="px-5 py-5">

      <div
        className="
          grid
          grid-cols-[1fr_340px]
          gap-6
          items-start
        "
      >

        {/* LEFT */}

        <div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-cyan-400
            "
          >
            X6 FORGE TERMINAL
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-white">
            Research Session
          </h1>

          <p
            className="
              mt-3
              text-sm
              text-zinc-500
            "
          >
            Real-time AI research for tokens, contracts and wallets in X6 Forge.
          </p>

          {/* STATUS */}

          <div className="mt-5 flex flex-wrap gap-2">

            <Badge text="Base Mainnet" />

            <Badge text="Research Mode" />

            <Badge text="AI Ready" />

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full max-w-[340px] justify-self-end">
          <ResearcherModel />
        </div>

      </div>

    </div>
  );
}

function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <div
      className="
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
      {text}
    </div>
  );
}