import { NextRequest } from "next/server";
import { runX6Forge } from "../../../lib/core/x6forge";

export async function GET() {
  const result = await runX6Forge(
    "0x940181a94A35A4569E4529A3CDfB74e38FD98631"
  );

  return Response.json(result);
}

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const result = await runX6Forge(
    body.target
  );

  return Response.json(result);
}