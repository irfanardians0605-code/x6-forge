"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

type AnalyzeButtonProps = {
  loading: boolean;
};

export default function AnalyzeButton({
  loading,
}: AnalyzeButtonProps) {
  return (
    <motion.button
      type="button"
      disabled={loading}
      whileHover={!loading ? { y: -2, scale: 1.02 } : {}}
      whileTap={!loading ? { scale: 0.98 } : {}}
      className={`
        group
        relative

        flex
        h-14
        items-center
        justify-center
        gap-3

        overflow-hidden
        rounded-2xl

        px-8

        font-semibold
        text-white

        transition-all

        ${
          loading
            ? "cursor-not-allowed bg-zinc-700"
            : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_10px_40px_rgba(34,211,238,.20)]"
        }
      `}
    >
      {!loading && (
        <span
          className="
            absolute
            inset-0

            -translate-x-full

            skew-x-[-25deg]

            bg-gradient-to-r

            from-transparent

            via-white/30

            to-transparent

            transition-transform

            duration-700

            group-hover:translate-x-[250%]
          "
        />
      )}

      {loading ? (
        <>
          <Loader2
            size={18}
            className="animate-spin"
          />

          <span>Analyzing...</span>
        </>
      ) : (
        <>
          <span className="relative z-10">
            Analyze
          </span>

          <ArrowRight
            size={18}
            className="
              relative
              z-10

              transition-transform

              group-hover:translate-x-1
            "
          />
        </>
      )}
    </motion.button>
  );
}