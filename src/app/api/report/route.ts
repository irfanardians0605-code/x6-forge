import { runX6Forge }
from "../../../lib/core/x6forge";

import { buildReport }
from "../../../lib/report/report";

export async function GET() {

  const analysis =
    await runX6Forge(
      "0x940181a94A35A4569E4529A3CDfB74e38FD98631"
    );

  const report =
    buildReport(
      analysis
    );

  return Response.json(
    report
  );
}