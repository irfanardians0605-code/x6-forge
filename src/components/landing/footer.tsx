"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#09090B] px-6 pt-24 pb-10">

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-64
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/5
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Divider */}

        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Logo */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <h2
            className="
              text-4xl
              font-bold
              tracking-[-0.05em]
              text-white
            "
          >
            X6 FORGE
          </h2>

          <p className="mt-4 text-zinc-500">
            Autonomous Crypto Research Framework
          </p>

        </motion.div>

        {/* Links */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">

          {[
            "GitHub",
            "Documentation",
            "Follow X",
          ].map((item) => (

            <a
              key={item}
              href="#"
              className="
                text-sm
                text-zinc-500

                transition-all
                duration-300

                hover:text-cyan-300
              "
            >
              {item}
            </a>

          ))}

        </div>

        {/* Bottom */}

        <div
          className="
            mt-16

            flex
            flex-col
            items-center
            justify-between
            gap-4

            border-t
            border-zinc-800

            pt-8

            text-sm
            text-zinc-600

            md:flex-row
          "
        >

          <span>
            © 2026 X6 Forge. All rights reserved.
          </span>

          <span>
            Built for the Base Ecosystem.
          </span>

        </div>

      </div>

    </footer>
  );
}