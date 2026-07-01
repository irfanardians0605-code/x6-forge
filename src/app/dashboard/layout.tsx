"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

import Topbar from "@/components/dashboard/topbar";
import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isConnected } = useAccount();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      router.replace("/");
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null;
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#09090B]
        text-white
      "
    >
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
      >
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

        <div
          className="
            absolute
            bottom-[5%]
            right-[8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/5
            blur-[180px]
          "
        />

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

      <Topbar
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="flex flex-col lg:flex-row">

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <section
          className="
            flex-1
            overflow-y-auto
            min-w-0

            p-4
            md:p-5
            lg:p-6
          "
        >
          {children}
        </section>

      </div>

    </main>
  );
}