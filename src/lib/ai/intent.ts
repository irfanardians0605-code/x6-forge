export type ResearchIntent =
  | "analyze"
  | "compare"
  | "explain"
  | "holder"
  | "risk"
  | "contract"
  | "general";

export function detectIntent(
  prompt: string
): ResearchIntent {

  const text = prompt.toLowerCase();

  if (text.includes("compare") || text.includes("vs")) {
    return "compare";
  }

  if (text.includes("analyze") || text.includes("analysis")) {
    return "analyze";
  }

  if (text.includes("holder")) {
    return "holder";
  }

  if (text.includes("risk")) {
    return "risk";
  }

  if (text.includes("contract") || text.startsWith("0x")) {
    return "contract";
  }

  if (text.includes("explain") || text.includes("what is")) {
    return "explain";
  }

  return "general";
}