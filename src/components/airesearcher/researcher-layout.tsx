"use client";

import {
  AIModel,
  Message,
  ResearchPipeline,
} from "@/lib/ai/types";

import ResearcherHeader from "./researcher-header";
import ResearcherChat from "./researcher-chat";
import ResearcherPipeline from "./researcher-pipeline";
import ResearcherInput from "./researcher-input";

type Props = {
  messages: Message[];
  pipeline: ResearchPipeline;
  loading: boolean;
  selectedModel: AIModel;
  onResearch: (
    prompt: string
  ) => void;
};

export default function ResearcherLayout({
  messages,
  pipeline,
  loading,
  selectedModel,
  onResearch,
}: Props) {
  return (
    <section
      className="
        flex
        h-[calc(100vh-120px)]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-[#0D0E11]
      "
    >
      {/* HEADER */}

      <ResearcherHeader />

      <div className="border-t border-zinc-800" />

      {/* BODY */}

      <div
        className="
          flex-1
          overflow-hidden
          grid
          grid-cols-12
        "
      >
        {/* CHAT */}

        <div
          className="
            col-span-8
            overflow-hidden
            border-r
            border-zinc-800
          "
        >
          <ResearcherChat
            messages={messages}
          />
        </div>

        {/* PIPELINE */}

        <div
          className="
            col-span-4
            overflow-hidden
          "
        >
          <ResearcherPipeline
            pipeline={pipeline}
            model={selectedModel}
            loading={loading}
          />
        </div>
      </div>

      <div className="border-t border-zinc-800" />

      {/* INPUT */}

      <ResearcherInput
        loading={loading}
        onResearch={onResearch}
      />
    </section>
  );
}