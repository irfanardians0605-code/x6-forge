"use client";

import { Message } from "@/lib/ai/types";

type Props = {
  message: Message;
};

export default function ResearcherMessage({
  message,
}: Props) {

  const isUser =
    message.role === "user";

  return (

    <div
      className="
        rounded-xl

        border
        border-zinc-800

        bg-[#111317]

        p-4
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <p
            className={`
              text-xs

              font-semibold

              uppercase

              tracking-wider

              ${
                isUser
                  ? "text-white"
                  : "text-cyan-400"
              }
            `}
          >
            {isUser
              ? "Research Target"
              : "X6 Forge AI"}
          </p>

          <p className="mt-1 text-xs text-zinc-500">

            {new Date(
              message.createdAt
            ).toLocaleTimeString()}

          </p>

        </div>

        <div
          className={`
            rounded-full

            px-3
            py-1

            text-[11px]

            ${
              isUser
                ? "bg-white/10 text-white"
                : "bg-cyan-500/10 text-cyan-300"
            }
          `}
        >
          {isUser
            ? "INPUT"
            : "RESULT"}
        </div>

      </div>

      {/* CONTENT */}

      <div
        className="
          mt-2
          whitespace-pre-line
          text-[13px]
          leading-5
          text-zinc-300
        "
      >

        {message.content}

      </div>

    </div>

  );

}