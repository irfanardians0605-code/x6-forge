import { NextResponse } from "next/server";
import { researchBrain } from "@/lib/ai/brain";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.prompt) {
      return NextResponse.json(
        {
          success: false,
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await researchBrain(
      body.prompt
    );

    return NextResponse.json(result);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );

  }
}