"use client";

import { useState } from "react";

import ResearcherLayout from "./researcher-layout";

import {
  createAssistantMessage,
  createUserMessage,
} from "@/lib/ai/conversation";

import {
  Message,
  ResearchPipeline,
  AIModel,
} from "@/lib/ai/types";

import {
  executeResearch,
} from "@/lib/research/controller";

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function AIResearcher() {

  const [messages, setMessages] = useState<Message[]>([
    createAssistantMessage(
`AI Researcher Ready.

Examples
• Analyze AERO
• Analyze BANKR
• Analyze 0x...`
    ),
  ]);

  const [selectedModel] =
    useState<AIModel>("openai");

  const [isResearching, setIsResearching] =
    useState(false);

  const [pipeline, setPipeline] =
    useState<ResearchPipeline>({
      intent: "waiting",
      planner: "waiting",
      dexscreener: "waiting",
      risk: "waiting",
      report: "waiting",
      openai: "waiting",
    });

  async function handleResearch(
    prompt: string
  ) {

    if (!prompt.trim()) return;

    setMessages((prev) => [
      ...prev,
      createUserMessage(prompt),
    ]);

    setIsResearching(true);

    setPipeline({
      intent: "running",
      planner: "waiting",
      dexscreener: "waiting",
      risk: "waiting",
      report: "waiting",
      openai: "waiting",
    });

    try {

      await delay(350);

      setPipeline({
        intent: "completed",
        planner: "running",
        dexscreener: "waiting",
        risk: "waiting",
        report: "waiting",
        openai: "waiting",
      });

      await delay(450);

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "running",
        risk: "waiting",
        report: "waiting",
        openai: "waiting",
      });

      await delay(600);

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "completed",
        risk: "running",
        report: "waiting",
        openai: "waiting",
      });

      await delay(500);

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "completed",
        risk: "completed",
        report: "waiting",
        openai: "running",
      });

      // ===== REAL API =====

      const data =
        await executeResearch(prompt);

      const report =
        data?.result;

      if (
        !report ||
        !report.market ||
        !report.risk
      ) {
        throw new Error(
          "Research report is incomplete."
        );
      }

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "completed",
        risk: "completed",
        report: "running",
        openai: "completed",
      });

      await delay(700);

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "completed",
        risk: "completed",
        report: "completed",
        openai: "completed",
      });

      const message = `
${report.summary}

──────────────

Price
$${report.market.priceUsd}

Liquidity
$${report.market.liquidityUsd.toLocaleString()}

24H Volume
$${report.market.volume24h.toLocaleString()}

FDV
$${report.market.fdv.toLocaleString()}

──────────────

Risk
${report.risk.level}

Score
${report.risk.score}/100

──────────────

${report.reasoning}
`;

      setMessages((prev) => [
        ...prev,
        createAssistantMessage(message),
      ]);

    } catch (error) {

      setPipeline({
        intent: "completed",
        planner: "completed",
        dexscreener: "completed",
        risk: "completed",
        report: "completed",
        openai: "completed",
      });

      setMessages((prev) => [
        ...prev,
        createAssistantMessage(
          error instanceof Error
            ? error.message
            : "Unknown error."
        ),
      ]);

    } finally {

      setIsResearching(false);

    }

  }

  return (

    <ResearcherLayout

      messages={messages}

      pipeline={pipeline}

      loading={isResearching}

      selectedModel={selectedModel}

      onResearch={handleResearch}

    />

  );

}