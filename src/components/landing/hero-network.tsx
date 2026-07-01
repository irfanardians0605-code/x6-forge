"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MODELS = [
  {
    name: "OpenAI",
    icon: "/ai/openai.svg",
  },
  {
    name: "Claude",
    icon: "/ai/claude.svg",
  },
  {
    name: "Gemini",
    icon: "/ai/gemini.svg",
  },
  {
    name: "DeepSeek",
    icon: "/ai/deepseek.svg",
  },
  {
    name: "Grok",
    icon: "/ai/grok.svg",
  },
  {
    name: "Base",
    icon: "/ai/base.svg",
  },
];

export default function HeroNetwork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
      }}
      className="
        relative

        mt-20

        flex

        flex-wrap

        items-center

        justify-center

        gap-4

        max-w-4xl
      "
    >
      {MODELS.map((model, index) => (
        <motion.div
          key={model.name}
          animate={{
            y: [0, -6, 0],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 3,
            delay: index * 0.35,
            repeat: Infinity,
          }}
          className="
            rounded-full

            border

            border-white/10

            bg-white/5

            px-5

            py-2.5

            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-2">

  <Image
    src={model.icon}
    alt={model.name}
    width={24}
    height={24}
    className="object-contain"
  />

  <span
    className={`
      text-sm
      font-medium
      ${
        model.name === "Base"
          ? "text-cyan-300"
          : "text-zinc-300"
      }
    `}
  >
    {model.name}
  </span>

</div>
        </motion.div>
      ))}
    </motion.div>
  );
}