"use client";

import { motion } from "framer-motion";
import {
  Database,
  Bot,
  ShieldCheck,
  FileText,
} from "lucide-react";

function MultiSourceIcon() {
  return (
    <div className="relative h-12 w-12">
      <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-cyan-300" />
      <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-cyan-300" />
      <div className="absolute bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" />

      <div className="absolute left-2 top-2 h-px w-8 rotate-[25deg] bg-cyan-300/70" />
      <div className="absolute right-2 top-2 h-px w-8 -rotate-[25deg] bg-cyan-300/70" />
    </div>
  );
}

function AIResearchIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/40">
      <span className="text-lg font-bold text-cyan-300">AI</span>
    </div>
  );
}

function RiskIcon() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center">
      <div className="absolute h-10 w-10 rounded-full border border-cyan-400/50" />
      <div className="absolute h-6 w-6 rounded-full border border-cyan-400" />
      <div className="h-2 w-2 rounded-full bg-cyan-300" />
    </div>
  );
}

function ReportIcon() {
  return (
    <div className="flex h-12 w-12 flex-col justify-center gap-1 rounded-xl border border-cyan-400/40 p-2">
      <div className="h-px w-full bg-cyan-300" />
      <div className="h-px w-4/5 bg-cyan-300" />
      <div className="h-px w-3/5 bg-cyan-300" />
    </div>
  );
}

{/* ================= features ================= */}

const features = [
  {
    icon: MultiSourceIcon,
    title: "Multi Source",
    description:
      "Aggregate trusted on-chain and market intelligence into one unified workflow.",
  },
  {
    icon: AIResearchIcon,
    title: "AI Research",
    description:
      "Autonomous agents verify contracts, trading activity and behavioral signals.",
  },
  {
    icon: RiskIcon,
    title: "Risk Engine",
    description:
      "Detect liquidity risks, ownership concentration and suspicious behavior.",
  },
  {
    icon: ReportIcon,
    title: "Smart Reports",
    description:
      "Generate structured reports with market data, verification and risk insights.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#09090B] px-6 py-28">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mb-14 text-center"
>
  <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
    FEATURES
  </p>

  <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
    Built for Professional Research
  </h2>

  <p className="mx-auto mt-4 max-w-xl text-zinc-500">
    Everything you need to research a smart contract.
  </p>
</motion.div>


        {/* Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

{features.map((feature, index) => {
  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        min-h-[240px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-gradient-to-b
        from-zinc-900/90
        via-[#10131A]
        to-[#09090B]
        p-6
        transition-all
        duration-300
        hover:border-cyan-400/60
        hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
      "
    >
      {/* Aurora Glow */}
      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

{/* Top Accent */}

<div
  className="
    absolute
    left-1/2
    top-0
    h-px
    w-20
    -translate-x-1/2
    bg-gradient-to-r
    from-transparent
    via-cyan-400/70
    to-transparent
  "
/>

      {/* Scan Line */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "220%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          h-full
          w-16
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

     {/* Icon */}

<motion.div
  whileHover={{
    scale: 1.08,
    rotate: 4,
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    relative
    z-10
    mx-auto
    flex
    h-16
    w-16
    items-center
    justify-center
  "
>
  {/* Glow */}
  <div
    className="
      absolute
      h-14
      w-14
      rounded-full
      bg-cyan-400/20
      blur-2xl
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
    "
  />

  {/* Icon */}
  <div
    className="
      relative
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      border
      border-cyan-400/20
      bg-cyan-500/5
    "
  >
    <Icon />
  </div>
</motion.div>

      {/* Title */}
      <h3
        className="
          relative
          z-10
          mt-7
          text-center
          text-lg
          font-semibold
          text-white
        "
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
          relative
          z-10
          mt-4
          text-center
          text-sm
          leading-7
          text-zinc-400
        "
      >
        {feature.description}
      </p>


{/* Hover Scan Line */}

<motion.div
  initial={{ x: "-140%" }}
  whileHover={{ x: "240%" }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-0
    top-0

    h-full
    w-20

    -skew-x-12

    bg-gradient-to-r
    from-transparent
    via-cyan-300/15
    to-transparent

    pointer-events-none
  "
/>

{/* Texture */}

<div
  className="
    absolute
    inset-0
    opacity-[0.03]
    pointer-events-none
    bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
    bg-[length:18px_18px]
  "
/>

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/30
          to-transparent
        "
      />
    </motion.div>
  );
})}

        </div>

      </div>

    </section>
  );
}