"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Search,
  History,
  Brain,
  Settings,
  Boxes,
  Bot,
  Sparkles,
} from "lucide-react";

const menus = [
  {
    icon: Search,
    title: "X6 Analyze",
    href: "/dashboard",
  },
  {
    icon: Brain,
    title: "X6 Researcher AI",
    href: "/dashboard/airesearcher",
  },

  // Coming Soon

  {
    icon: Sparkles,
    title: "X6 Intelligence AI",
    href: "#",
    comingSoon: true,
  },
  {
    icon: Bot,
    title: "X6 Agent Hub",
    href: "#",
    comingSoon: true,
  },
  {
    icon: Boxes,
    title: "X6 B20",
    href: "#",
    comingSoon: true,
  },

  // Bottom

  {
    icon: History,
    title: "History",
    href: "/dashboard/history",
  },
  {
    icon: Settings,
    title: "Settings",
    href: "#",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        flex
        h-[calc(100vh-72px)]
        w-[220px]
        flex-col
        border-r
        border-zinc-800
        bg-[#09090B]
      "
    >
      {/* Main */}

      <div className="flex-1 px-4 py-5">

        <p
          className="
            text-[10px]
            font-medium
            tracking-[0.35em]
            uppercase
            text-cyan-400
          "
        >
          Workspace
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Dashboard
        </h2>

        <div className="mt-8 space-y-2">

          {menus.map((item) => {
            const Icon = item.icon;

            const active =
              item.href !== "#" &&
              (
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href)
              );

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-3
                  transition-all

                  ${
                    item.comingSoon
                      ? "cursor-not-allowed opacity-45"
                      : active
                      ? "border border-cyan-400/20 bg-cyan-500/10 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }
                `}
              >
                <Icon size={18} />

                <div className="flex w-full items-center justify-between">

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>

                  {item.comingSoon && (
                    <span
                      className="
                        rounded-full
                        border
                        border-cyan-400/10
                        bg-cyan-500/5
                        px-2
                        py-0.5
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-cyan-300/50
                      "
                    >
                      Soon
                    </span>
                  )}

                </div>

              </Link>
            );
          })}

        </div>

      </div>

      {/* Footer */}

      <div
        className="
          border-t
          border-zinc-800
          px-4
          py-5
        "
      >
        <p
          className="
            text-[10px]
            tracking-[0.35em]
            uppercase
            text-cyan-400
          "
        >
          Network
        </p>

        <div
          className="
            mt-3
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-500/5
            p-4
          "
        >
          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm font-medium text-white">
              Base Mainnet
            </span>

          </div>

          <p className="mt-2 text-xs text-zinc-500">
            AI Network Connected
          </p>

        </div>

      </div>

    </aside>
  );
}