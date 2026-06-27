"use client";

import {
  Search,
  History,
  FileText,
  Settings,
} from "lucide-react";

const menus = [
  {
    icon: Search,
    title: "Analyze",
    active: true,
  },
  {
    icon: History,
    title: "History",
  },
  {
    icon: FileText,
    title: "Reports",
  },
  {
    icon: Settings,
    title: "Settings",
  },
];

export default function Sidebar() {
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

        {/* Menu */}

        <div className="mt-8 space-y-2">

          {menus.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.title}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3

                  rounded-xl

                  px-3
                  py-3

                  transition-all

                  ${
                    item.active
                      ? "border border-cyan-400/20 bg-cyan-500/10 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }
                `}
              >

                <Icon size={18} />

                <span className="text-sm font-medium">
                  {item.title}
                </span>

              </button>

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