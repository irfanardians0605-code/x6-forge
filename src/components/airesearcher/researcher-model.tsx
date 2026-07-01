"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const MODELS = [
  {
    id: "openai",
    name: "OpenAI GPT-5.5",
    status: "Active",
  },
  {
    id: "claude",
    name: "Claude Sonnet 4",
    status: "Coming Soon",
  },
  {
    id: "grok",
    name: "Grok 4",
    status: "Coming Soon",
  },
  {
    id: "deepseek",
    name: "DeepSeek V3",
    status: "Coming Soon",
  },
  {
    id: "gemini",
    name: "Gemini 2.5 Pro",
    status: "Coming Soon",
  },
  {
    id: "perplexity",
    name: "Perplexity Sonar",
    status: "Coming Soon",
  },
];

export default function ResearcherModel() {

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(MODELS[0]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClick(e: MouseEvent) {

      if (
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }

    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );

  }, []);

  return (

    <div
      ref={ref}
      className="relative w-full"
    >

      <p
        className="
          mb-2

          text-[10px]

          uppercase

          tracking-[0.35em]

          text-cyan-400
        "
      >
        LLM ENGINE
      </p>

      <button
        onClick={() => setOpen(!open)}
        className="
          group

          flex

          h-[56px]

          w-full

          items-center

          justify-between

          rounded-2xl

          border

          border-zinc-800

          bg-[#0B0C10]

          px-4

          transition-all

          hover:border-cyan-500/30

          hover:bg-[#111216]
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex

              h-10
              w-10

              items-center

              justify-center

              rounded-xl

              bg-cyan-500/10

              text-cyan-400
            "
          >
            <Bot size={18} />
          </div>

          <div>

            <p className="text-sm font-semibold text-white">
              {selected.name}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <span
            className={`
              rounded-full

              px-3

              py-1

              text-[10px]

              uppercase

              tracking-wide

              ${
                selected.status === "Active"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20"
              }
            `}
          >
            {selected.status}
          </span>

          <ChevronDown
            size={18}
            className={`
              text-zinc-500
              transition-transform

              ${open ? "rotate-180" : ""}
            `}
          />

        </div>

      </button>

      {open && (

        <div
          className="
            absolute

            right-0

            mt-3

            w-full

            overflow-hidden

            rounded-2xl

            border

            border-zinc-800

            bg-[#0B0C10]

            shadow-2xl

            z-50
          "
        >

          {MODELS.map((model) => (

            <button
              key={model.id}

              onClick={() => {

                setSelected(model);

                setOpen(false);

              }}

              className="
                flex

                w-full

                items-center

                justify-between

                border-b

                border-zinc-800

                px-4

                py-4

                transition-all

                hover:bg-cyan-500/5
              "
            >

              <div className="flex items-center gap-3">

                <Sparkles
                  size={16}
                  className="text-cyan-400"
                />

                <span className="text-sm text-white">
                  {model.name}
                </span>

              </div>

              <span
                className={`
                  text-xs

                  ${
                    model.status === "Active"
                      ? "text-green-400"
                      : "text-yellow-300"
                  }
                `}
              >
                {model.status}
              </span>

            </button>

          ))}

        </div>

      )}

    </div>

  );

}