"use client";

import { useState } from "react";

type Props = {
  loading: boolean;
  onResearch: (prompt: string) => void;
};

export default function ResearcherInput({
  loading,
  onResearch,
}: Props) {

  const [prompt, setPrompt] =
    useState("");

  function handleSubmit() {

    if (!prompt.trim()) return;

    onResearch(prompt);

    setPrompt("");

  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {

    if (e.key === "Enter") {

      e.preventDefault();

      handleSubmit();

    }

  }

  return (

    <div className="px-5 py-4">

      <div
        className="
          rounded-xl

          border
          border-zinc-800

          bg-[#111317]

          p-3
        "
      >

        <div className="mb-2">

          <p
            className="
              text-[11px]

              uppercase

              tracking-[0.35em]

              text-cyan-400
            "
          >
            RESEARCH TARGET
          </p>

        </div>

        <div className="flex items-center gap-3">

          <input

            value={prompt}

            onChange={(e) =>
              setPrompt(e.target.value)
            }

            onKeyDown={handleKeyDown}

            disabled={loading}

            placeholder="Example: Analyze AERO | Analyze BANKR | Analyze 0x940181..."

            className="
              flex-1

              bg-transparent

              text-sm

              text-white

              placeholder:text-zinc-500

              outline-none
            "

          />

          <button

            onClick={handleSubmit}

            disabled={loading}

            className="
              rounded-lg

              bg-cyan-500

              px-5
              py-2

              text-sm
              font-medium

              text-black

              transition-all

              hover:bg-cyan-400

              disabled:opacity-50
            "
          >

            {loading
              ? "Running..."
              : "X6 ANALYZE"}

          </button>

        </div>

      </div>

    </div>

  );

}