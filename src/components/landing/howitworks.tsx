"use client";

import { motion } from "framer-motion";


const steps = [
  {
    number: "01",
    title: "Connect Wallet",
    description: "Securely connect your wallet to start using X6 Forge.",
  },
  {
    number: "02",
    title: "Paste Contract",
    description: "Enter any Base smart contract address for analysis.",
  },
  {
    number: "03",
    title: "AI Analysis",
    description: "Our research pipeline verifies data across multiple sources.",
  },
  {
    number: "04",
    title: "Research Report",
    description: "Receive a complete report with verification and risk insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#09090B] px-6 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mb-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            HOW IT WORKS
          </p>

         <motion.h2
  initial={{
    opacity: 0,
    y: 25,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
  }}
  className="
  relative
  mt-4
  inline-block
  overflow-hidden

  text-4xl
  font-bold
  text-white
  drop-shadow-[0_0_25px_rgba(34,211,238,.15)]

  md:text-5xl
"
>
  Analyze in Four Simple Steps

  {/* Light Sweep */}

  <motion.span
    initial={{ x: "-180%" }}
    whileInView={{ x: "250%" }}
    viewport={{ once: true }}
    transition={{
      delay: .6,
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

          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            From wallet connection to a complete AI-powered research report.
          </p>

        </motion.div>

        {/* Steps */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {steps.map((step, index) => {


            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
className="
group
relative

rounded-3xl

border
border-zinc-800

bg-gradient-to-b
from-zinc-900/80
via-[#10131A]
to-[#09090B]

p-8

text-center

transition-all
duration-300

hover:-translate-y-2
hover:border-cyan-400/40
hover:shadow-[0_20px_60px_rgba(34,211,238,.12)]
"              >

                <div
  className="
    mx-auto
    text-6xl
    font-black
    tracking-[-0.08em]
    text-cyan-400/10
    transition-all
    duration-300
    group-hover:text-cyan-400/25
  "
>
  {step.number}
</div>

                <h3
  className="
    mt-6
    text-xl
    font-semibold
    text-white
  "
>
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      top-8
                      left-[65%]
                      hidden
                      h-px
                      w-full
                      bg-gradient-to-r
from-cyan-400/70
via-cyan-300/30
to-transparent
                      md:block
                    "
                  />
                )}

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}