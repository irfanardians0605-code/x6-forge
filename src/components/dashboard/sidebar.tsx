"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
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

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  const renderMenu = () =>
    menus.map((item) => {
      const Icon = item.icon;

      const active =
        item.href !== "#" &&
        (item.href === "/dashboard"
          ? pathname === "/dashboard"
          : pathname.startsWith(item.href));

      return (
        <Link
          key={item.title}
          href={item.href}
          onClick={() => {
            if (window.innerWidth < 1024) {
              onClose();
            }
          }}
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
                ? "cursor-not-allowed opacity-50"
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
    });

  const SidebarContent = () => (
    <>
      <div className="flex-1 px-4 py-5">

        <p
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          Workspace
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Dashboard
        </h2>

        <div className="mt-8 space-y-2">
          {renderMenu()}
        </div>

      </div>

      <div
        className="
          mt-auto
          border-t
          border-zinc-800
          px-4
          py-5
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.35em]
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
    </>
  );

    return (
    <>
      {/* Mobile Overlay */}

      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      {/* Mobile Sidebar */}

      <aside
        className={`
          fixed
          top-[68px]
          left-0
          z-50

          flex
          h-[calc(100vh-68px)]
          w-[260px]
          flex-col

          border-r
          border-zinc-800

          bg-[#09090B]

          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:hidden
        `}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-4">

          <span className="font-semibold text-white">
            X6 Forge
          </span>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-zinc-400
              transition
              hover:bg-zinc-800
              hover:text-white
            "
          >
            <X size={18} />
          </button>

        </div>

        <SidebarContent />

      </aside>

      {/* Desktop Sidebar */}

      <aside
        className="
          hidden

          lg:flex

          lg:h-[calc(100vh-68px)]
          lg:w-[220px]

          lg:flex-col
          lg:shrink-0

          border-r
          border-zinc-800

          bg-[#09090B]
        "
      >
        <SidebarContent />
      </aside>

    </>
  );
}