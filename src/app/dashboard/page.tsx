"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAccount } from "wagmi";

import Topbar from "@/components/dashboard/topbar";
import Sidebar from "@/components/dashboard/sidebar";
import ResearchConsole from "@/components/dashboard/researchconsole";

export default function DashboardPage() {

  const router = useRouter();

  const { isConnected } = useAccount();

  useEffect(() => {

    if (!isConnected) {
      router.replace("/");
    }

  }, [
    isConnected,
    router,
  ]);

  if (!isConnected) {
    return null;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
        {/* Cyan Glow */}

        <div
          className="
            absolute
            left-[28%]
            top-[18%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-cyan-500/5
            blur-[180px]
          "
        />

        {/* Blue Glow */}

        <div
          className="
            absolute
            right-[8%]
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/5
            blur-[180px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

      </div>

      <Topbar />

      <div className="flex">

        <Sidebar />

        <section
          className="
            flex-1
            overflow-y-auto
            p-5
          "
        >
          <ResearchConsole />
        </section>

      </div>

    </main>
  );
}