"use client";

import Link from "next/link";
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-sm font-bold text-white">
            X6
          </div>

          <div>
            <p className="text-lg font-semibold text-white">
              X6 Forge
            </p>

            <p className="text-xs text-zinc-500">
              Research Framework
            </p>
          </div>

        </Link>

        {/* Menu */}

        <nav className="hidden items-center gap-10 md:flex">

          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Docs
          </Link>

          <Link
            href="#"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            GitHub
          </Link>

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
                      py-3
                      text-sm
                      font-medium
                      text-black
                      transition
                      hover:scale-105
                    "
                  >
                    Connect Wallet
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
                      py-3
                      text-sm
                      font-medium
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
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition
                    hover:scale-105
                  "
                >
                  {account.displayName}
                </button>
              );
            }}
          </ConnectButton.Custom>

        </nav>

      </div>
    </header>
  );
}