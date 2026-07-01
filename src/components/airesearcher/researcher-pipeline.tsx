"use client";

import {
  AIModel,
  MessageStatus,
  ResearchPipeline,
} from "@/lib/ai/types";

type Props = {
  pipeline: ResearchPipeline;
  model: AIModel;
  loading: boolean;
};

const STEPS = [
  { key: "intent", title: "Intent Detection" },
  { key: "planner", title: "Research Planner" },
  { key: "dexscreener", title: "DexScreener" },
  { key: "risk", title: "Risk Engine" },
  { key: "openai", title: "OpenAI Reasoning" },
  { key: "report", title: "Report Builder" },
] as const;

export default function ResearcherPipeline({
  pipeline,
  model,
  loading,
}: Props) {

  const completed =
    Object.values(pipeline).filter(
      (x) => x === "completed"
    ).length;

  const progress =
    (completed / STEPS.length) * 100;

  return (
    <div
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        p-5
      "
    >
      {/* HEADER */}

      <div>

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          RESEARCH PIPELINE
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          AI execution workflow
        </p>

      </div>

      {/* PROGRESS */}

      <div className="mt-6">

        <div className="flex justify-between text-xs text-zinc-500">

          <span>
            Progress
          </span>

          <span>
            {completed}/{STEPS.length}
          </span>

        </div>

        <div
          className="
            mt-2
            h-2
            overflow-hidden
            rounded-full
            bg-zinc-800
          "
        >

          <div
            className="
              h-full
              rounded-full
              bg-cyan-400
              transition-all
              duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* WORKFLOW */}

      <section className="mt-7">

        <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
          Workflow
        </p>

        <div className="space-y-2">

          <PipelineItem
            title="Intent Detection"
            status={pipeline.intent}
          />

          <PipelineItem
            title="Research Planner"
            status={pipeline.planner}
          />

          <PipelineItem
            title="DexScreener"
            status={pipeline.dexscreener}
          />

          <PipelineItem
            title="Risk Engine"
            status={pipeline.risk}
          />

          <PipelineItem
            title="OpenAI Reasoning"
            status={pipeline.openai}
          />

          <PipelineItem
            title="Report Builder"
            status={pipeline.report}
          />

        </div>

      </section>

      {/* STATUS */}

      <section className="mt-6">

        <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
          System Status
        </p>

        <div
          className="
            rounded-xl
            border
            border-zinc-800
            bg-[#0B0C10]
            p-4
          "
        >

          <div className="flex items-center justify-between">

            <span className="text-sm text-white">

              LLM Engine

            </span>

            <span className="text-xs text-cyan-400">

              {model.toUpperCase()}

            </span>

          </div>

          <div className="mt-3 flex items-center justify-between">

            <span className="text-sm text-white">

              Status

            </span>

            <span
              className={`text-xs ${
                loading
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              {loading
                ? "Researching..."
                : "Ready"}
            </span>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="mt-6">

        <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
          Active Services
        </p>

        <div className="flex flex-wrap gap-2">

          <Tool text="DexScreener" />

          <Tool text="Risk Engine" />

          <Tool text="OpenAI" />

          <Tool text="Report Builder" />

        </div>

      </section>

    </div>
  );
}

function PipelineItem({
  title,
  status,
}: {
  title: string;
  status: MessageStatus;
}) {

  const running =
    status === "running";

  const completed =
    status === "completed";

  return (

    <div
      className="
        flex
        items-center
        justify-between
        rounded-lg
        border
        border-zinc-800
        bg-[#0B0C10]
        px-4
        py-3
      "
    >

      <div className="flex items-center gap-3">

        <div
          className={`
            h-2.5
            w-2.5
            rounded-full

            ${
              completed
                ? "bg-green-400"
                : running
                ? "animate-pulse bg-cyan-400"
                : "bg-zinc-600"
            }
          `}
        />

        <span className="text-sm text-white">

          {title}

        </span>

      </div>

      <span
        className={`text-xs font-medium ${
          completed
            ? "text-green-400"
            : running
            ? "text-cyan-400"
            : "text-zinc-500"
        }`}
      >

        {completed
          ? "Completed"
          : running
          ? "Scanning..."
          : "Waiting"}

      </span>

    </div>

  );

}

function Tool({
  text,
}: {
  text: string;
}) {

  return (

    <span
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

    </span>

  );

}