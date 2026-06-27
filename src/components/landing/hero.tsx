"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6">

     {/* ================= Background ================= */}

{/* Main Nebula */}
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

{/* Top Glow */}
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

{/* Bottom Glow */}
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

{/* Static Stars */}

<div className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-white opacity-70" />

<div className="absolute left-[22%] top-[25%] h-1.5 w-1.5 rounded-full bg-cyan-200 opacity-70" />

<div className="absolute left-[42%] top-[10%] h-1 w-1 rounded-full bg-white opacity-60" />

<div className="absolute right-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-white opacity-80" />

<div className="absolute right-[28%] top-[32%] h-1 w-1 rounded-full bg-cyan-300 opacity-60" />

<div className="absolute left-[12%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-white opacity-60" />

<div className="absolute left-[38%] bottom-[22%] h-1 w-1 rounded-full bg-white opacity-40" />

<div className="absolute right-[16%] bottom-[26%] h-2 w-2 rounded-full bg-cyan-200 opacity-50" />

<div className="absolute right-[40%] bottom-[12%] h-1 w-1 rounded-full bg-white opacity-70" />

<div className="absolute left-[65%] top-[42%] h-1 w-1 rounded-full bg-white opacity-40" />

{/* ================= Premium Meteors ================= */}

{/* Meteor 1 */}
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
    <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-white opacity-80 blur-[1px]" />
  </div>
</motion.div>

{/* Meteor 2 */}
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
    <div className="absolute right-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-l from-transparent via-cyan-300 to-white opacity-70 blur-[1px]" />
  </div>
</motion.div>

{/* Meteor 3 */}
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
    <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-white opacity-80 blur-[1px]" />
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

      {/* ================= Hero ================= */}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="
            rounded-full
            border
            border-blue-500/20
            bg-zinc-900/70
            px-5
            py-2
            backdrop-blur-md
          "
        >
          <span className="text-sm text-zinc-300">
            Autonomous Crypto Research Framework
          </span>
        </motion.div>


{/* ================= Title ================= */}

<div className="relative mt-8 inline-block">

  <motion.h1
    initial={{
      opacity: 0,
      scale: 0.95,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      delay: 0.15,
      duration: 0.6,
    }}
    className="
      relative
      z-10

      text-7xl
      font-extrabold

      tracking-[-0.06em]

      text-transparent
      bg-clip-text

      bg-gradient-to-r
      from-white
      via-cyan-200
      to-white

      drop-shadow-[0_0_35px_rgba(56,189,248,.45)]

      md:text-[120px]
    "
  >
    X6 FORGE
  </motion.h1>

  {/* Light Sweep */}

  <motion.div
    initial={{
      x: -180,
      opacity: 0,
    }}
    animate={{
      x: 520,
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 1.6,
      delay: 2,
      repeat: Infinity,
      repeatDelay: 5,
      ease: "easeInOut",
    }}
    className="
      absolute
      top-1/2
      left-0

      h-[140%]
      w-16

      -translate-y-1/2
      -skew-x-[22deg]

      rounded-full

      bg-gradient-to-r
      from-transparent
      via-white/90
      to-transparent

      blur-lg

      mix-blend-screen
    "
  />

</div>


        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-6
            text-lg
            text-zinc-400
          "
        >
          Analyze Smart Contracts with Realtime Market Intelligence and Multi-Source Verification.
        </motion.p>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          className="mt-14"
        >
          <button
            className="
              rounded-full
              bg-white
              px-10
              py-4
              text-sm
              font-semibold
              text-black

              shadow-[0_0_35px_rgba(255,255,255,0.25)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-105
            "
          >

            Connect Wallet
          </button>
        </motion.div>

    {/* ================= Radar ================= */}

<motion.div
  animate={{
    scale: [1, 1.03, 1],
    opacity: [0.45, 0.45, 0.45],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative mt-16 flex h-64 items-center justify-center"
>
  {/* Ring 1 */}
  <div
    className="
      absolute
      h-24
      w-24
      rounded-full
      border
      border-cyan-400/30
    "
  />

  {/* Ring 2 */}
  <div
    className="
      absolute
      h-40
      w-40
      rounded-full
      border
      border-cyan-400/20
    "
  />

  {/* Ring 3 */}
  <div
    className="
      absolute
      h-56
      w-56
      rounded-full
      border
      border-cyan-400/10
    "
  />

  {/* Core */}
  <motion.div
    animate={{
      scale: [1, 1.35, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      h-3
      w-3
      rounded-full
      bg-cyan-300
      shadow-[0_0_25px_rgb(34,211,238)]
    "
  />
</motion.div>

      </div>

    </section>
  );
}