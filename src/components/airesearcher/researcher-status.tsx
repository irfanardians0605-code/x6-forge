"use client";

import {
  Brain,
  Database,
  History,
  Network,
  Activity,
} from "lucide-react";

export default function AssistantStatus() {
  return (
    <div
      className="
        h-full
        border-l
        border-zinc-800
        bg-[#0B0C10]
        p-6
      "
    >
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
        Live Context
      </p>

      <div className="mt-6 space-y-4">

        <StatusCard
          icon={<Brain size={18} />}
          title="AI Model"
          value="OpenAI (Beta)"
        />

        <StatusCard
          icon={<Database size={18} />}
          title="Research Engine"
          value="Connected"
        />

        <StatusCard
          icon={<History size={18} />}
          title="History"
          value="Ready"
        />

        <StatusCard
          icon={<Network size={18} />}
          title="Base MCP"
          value="Coming Soon"
        />

        <StatusCard
          icon={<Activity size={18} />}
          title="Session"
          value="0 Messages"
        />

      </div>

    </div>
  );
}

function StatusCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-zinc-800
        bg-[#101114]
        p-4
      "
    >
      <div className="flex items-center gap-3">

        <div className="text-cyan-400">
          {icon}
        </div>

        <div>

          <p className="text-xs uppercase tracking-wider text-zinc-500">
            {title}
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}