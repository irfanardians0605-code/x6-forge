import { NextResponse } from "next/server";
import { getDexToken } from "@/lib/services/dexscreener";

export async function GET() {
  try {

    const data = await getDexToken("AERO");

    return NextResponse.json(data);

  } catch (error) {

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