import { ResearchPlan } from "./planner";

import {
  createContext,
} from "@/lib/research/context";

import {
  executeMarketAgent,
} from "@/lib/agents/market";

import {
  executeReasoning,
} from "@/lib/research/reasoning";

import {
  buildResearchReport,
} from "./report";

export async function executeResearchPlan(
  plan: ResearchPlan,
  prompt: string
) {

  switch (plan.intent) {

    case "analyze": {

      let context =
        createContext(prompt);

      context =
        await executeMarketAgent(
          context
        );

      const reasoning =
        await executeReasoning({

          context,

        });

      const report =
        buildResearchReport(

          context,

          reasoning

        );

      console.log("========== REPORT ==========");
      console.dir(report, {
        depth: null,
      });
      console.log("============================");

      return report;

    }

    default:

      return {

        summary:
          "Intent is not supported yet.",

      };

  }

}