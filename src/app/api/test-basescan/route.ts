import { basescan } from "@/lib/agents/basescan";

export async function GET() {
  const result = await basescan(
    "0x940181a94A35A4569E4529A3CDfB74e38FD98631"
  );

  return Response.json(result);
}