"use client";

import { Message } from "@/lib/ai/types";

import ResearcherMessage from "./researcher-message";

type Props = {
  messages: Message[];
};

export default function ResearcherChat({
  messages,
}: Props) {
  return (
    <div
      className="
        h-full

        overflow-y-auto

        px-5
        py-5
      "
    >
      {/* SECTION */}

      <div className="mb-5">

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          RESEARCH SESSION
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Live investigation and AI reasoning.
        </p>

      </div>

      {/* MESSAGE */}

      <div className="space-y-4">

        {messages.map((message) => (

          <ResearcherMessage
            key={message.id}
            message={message}
          />

        ))}

      </div>

    </div>
  );
}