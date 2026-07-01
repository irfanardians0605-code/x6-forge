"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const router = useRouter();

  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50

        border-b
        border-white/5

        bg-[#09090B]/70
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* ================= Logo ================= */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo/logo.svg"
            alt="X6 Forge"
            width={64}
            height={64}
            priority
            className="object-contain"
          />

          <div>

            <h1 className="text-[17px] font-semibold tracking-tight text-white">
              X6 Forge
            </h1>

            <p className="text-xs text-zinc-500">
              On-Chain Intelligence
            </p>

          </div>
        </Link>

        {/* ================= Navigation ================= */}

        <div className="hidden items-center gap-8 lg:flex">

          <Link
            href="#features"
            className="
              text-sm
              text-zinc-400

              transition-all
              duration-300

              hover:text-white
            "
          >
            Features
          </Link>

          <Link
            href="#"
            className="
              text-sm
              text-zinc-400

              transition-all
              duration-300

              hover:text-white
            "
          >
            Docs
          </Link>

          <Link
            href="#"
            className="
              text-sm
              text-zinc-400

              transition-all
              duration-300

              hover:text-white
            "
          >
            GitHub
          </Link>

          <Link
            href="https://x.com/@x6forge"
            target="_blank"
            className="
              text-sm
              text-zinc-400

              transition-all
              duration-300

              hover:text-white
            "
          >
            X
          </Link>

          {/* ================= Launch App ================= */}

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

              const connected =
                ready &&
                account &&
                chain;

              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    className="
                      rounded-full

                      bg-white

                      px-6
                      py-2.5

                      text-sm
                      font-semibold

                      text-black

                      shadow-[0_0_30px_rgba(255,255,255,0.15)]

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:scale-[1.03]
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

                      px-6
                      py-2.5

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

                    px-6
                    py-2.5

                    text-sm
                    font-semibold

                    text-black

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                  "
                >
                  {account.displayName}
                </button>
              );
            }}
          </ConnectButton.Custom>

        </div>

      </div>
    </header>
  );
}