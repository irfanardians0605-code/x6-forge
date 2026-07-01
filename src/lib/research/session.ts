import { Message } from "@/lib/ai/types";

export interface ResearchSession {

  id: string;

  prompt: string;

  createdAt: number;

  messages: Message[];

}