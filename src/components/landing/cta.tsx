"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] px-6 py-32">
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            relative
            mt-6
            inline-block
            overflow-hidden

            text-5xl
            font-bold
            tracking-[-0.05em]
            text-white

            drop-shadow-[0_0_30px_rgba(34,211,238,.15)]

            md:text-6xl
          "
        >
          Start Your First Analysis

          {/* Light Sweep */}

          <motion.span
            initial={{ x: "-180%" }}
            whileInView={{ x: "250%" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-y-0
              left-0
              w-20
              -skew-x-12

              bg-gradient-to-r
              from-transparent
              via-white/70
              to-transparent

              blur-md
            "
          />
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Paste any Base smart contract and let X6 Forge perform autonomous
          analysis, multi-source verification, and intelligent risk assessment
          in seconds.
        </motion.p>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.35,
            duration: 0.6,
          }}
          className="mt-12"
        >
          <button
            className="
              group
              relative
              overflow-hidden

              rounded-full
              bg-white

              px-10
              py-4

              text-sm
              font-semibold
              text-black

              shadow-[0_0_40px_rgba(255,255,255,.25)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:scale-105
            "
          >
            <span className="relative z-10">
              Start Analysis
            </span>

            <span
              className="
                absolute
                inset-0

                -translate-x-full
                skew-x-[-25deg]

                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent

                transition-transform
                duration-700

                group-hover:translate-x-[250%]
              "
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}