"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* ================= Main Nebula ================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* ================= Top Glow ================= */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[160px]
        "
      />

      {/* ================= Bottom Glow ================= */}

      <div
        className="
          absolute
          left-1/2
          bottom-[-250px]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      {/* ================= Stars ================= */}

      <div className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-white/70" />
      <div className="absolute left-[22%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-200/70" />
      <div className="absolute left-[42%] top-[10%] h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute right-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/80" />
      <div className="absolute right-[28%] top-[32%] h-1 w-1 rounded-full bg-cyan-300/60" />
      <div className="absolute left-[12%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-white/60" />
      <div className="absolute left-[38%] bottom-[22%] h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute right-[16%] bottom-[26%] h-2 w-2 rounded-full bg-cyan-200/50" />
      <div className="absolute right-[40%] bottom-[12%] h-1 w-1 rounded-full bg-white/70" />
      <div className="absolute left-[65%] top-[42%] h-1 w-1 rounded-full bg-white/40" />

      {/* ================= Meteor 1 ================= */}

      <motion.div
        initial={{ x: -300, y: -200 }}
        animate={{ x: 1700, y: 900 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "linear",
        }}
        className="absolute top-[8%] left-[-20%]"
      >
        <div className="relative h-1 w-44 rotate-[28deg]">
          <div className="absolute right-0 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_#fff]" />
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-white blur-[1px]" />
        </div>
      </motion.div>

      {/* ================= Meteor 2 ================= */}

      <motion.div
        initial={{ x: 1600, y: -150 }}
        animate={{ x: -500, y: 700 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear",
        }}
        className="absolute top-[22%] right-[-20%]"
      >
        <div className="relative h-1 w-36 -rotate-[25deg]">
          <div className="absolute left-0 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_20px_#67e8f9]" />
          <div className="absolute right-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-l from-transparent via-cyan-300 to-white blur-[1px]" />
        </div>
      </motion.div>

      {/* ================= Meteor 3 ================= */}

      <motion.div
        initial={{ x: -500, y: 200 }}
        animate={{ x: 1800, y: 900 }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 15,
          ease: "linear",
        }}
        className="absolute top-[45%] left-[-30%]"
      >
        <div className="relative h-1 w-28 rotate-[22deg]">
          <div className="absolute right-0 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_#fff]" />
          <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-white blur-[1px]" />
        </div>
      </motion.div>

      {/* ================= Energy Beam ================= */}

      <motion.div
        animate={{
          opacity: [0.25, 0.75, 0.25],
          scaleX: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[3px]
          w-[950px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent
          blur-sm
        "
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.35, 0.05],
          scaleX: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-12
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-px
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          bg-white
        "
      />
    </>
  );
}