import { ResearchContext } from "./types";

export function createContext(
  prompt: string
): ResearchContext {

  return {

    prompt,

    evidence: [],

  };

}