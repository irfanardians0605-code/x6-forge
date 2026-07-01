"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function HeroContent() {
  const router = useRouter();

  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/5
          px-5
          py-2
          backdrop-blur-md
        "
      >
        <span className="text-sm text-cyan-300">
          Built for Base Ecosystem
        </span>
      </motion.div>

      {/* Title */}

      <div className="relative mt-8 inline-block">

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
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

      {/* Headline */}

      <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
  className="
    mt-5

    text-3xl
    md:text-5xl
    lg:text-6xl

    font-bold

    tracking-tight

    text-white
  "
>
  From Data to Intelligence.
</motion.h2>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          mt-6
          max-w-3xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        AI-powered on-chain analysis and research
        <br />
        built for the Base ecosystem.
      </motion.p>

      {/* Launch App */}

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
        className="mt-12"
      >

        <ConnectButton.Custom>
          {({
            account,
            chain,
            mounted,
            openConnectModal,
            openAccountModal,
            openChainModal,
          }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            if (!connected) {
              return (
                <button
                  onClick={openConnectModal}
                  className="
                    rounded-full
                    bg-white
                    px-10
                    py-4
                    text-sm
                    font-semibold
                    text-black
                    shadow-[0_0_35px_rgba(255,255,255,.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                  "
                >
                  Launch App
                </button>
              );
            }

            if (chain.unsupported) {
              return (
                <button
                  onClick={openChainModal}
                  className="
                    rounded-full
                    bg-red-500
                    px-10
                    py-4
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Wrong Network
                </button>
              );
            }

            return (
  <button
    onClick={openAccountModal}
    className="
      rounded-full
      bg-white
      px-10
      py-4
      text-sm
      font-semibold
      text-black
      shadow-[0_0_35px_rgba(255,255,255,.25)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
    "
  >
    {account.displayName}
  </button>
);
}}
</ConnectButton.Custom>

      </motion.div>

    </div>
  );
}