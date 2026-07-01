import { NextResponse } from "next/server";

import {
  listMCPTools,
} from "@/lib/mcp/tools";

export async function GET() {

  try {

    const tools =
      await listMCPTools();

    return NextResponse.json({

      success: true,

      count: tools.length,

      tools,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({

      success: false,

      error:
        error instanceof Error
          ? error.message
          : "Unknown error",

    }, {

      status: 500,

    });

  }

}