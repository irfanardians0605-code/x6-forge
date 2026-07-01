import {
  ResearchContext,
} from "@/lib/research/context";

export interface ReasoningRequest {

  context: ResearchContext;

}

export interface ReasoningResult {

  summary: string;

  reasoning: string;

}