import { intake } from "../agents/intake";
import { oracle } from "../agents/oracle";
import { forge } from "../agents/forge";
import { gecko } from "../agents/gecko";
import { basescan } from "../agents/basescan";
import { aegis } from "../agents/aegis";
import { cipher } from "../agents/cipher";
import { trace } from "../agents/trace";
import { buildReport } from "../report/report";

type ProgressCallback = (event: {
  agent: string;
  result: any;
}) => void | Promise<void>;

export async function runX6Forge(
  target: string,
  onProgress?: ProgressCallback
) {
  const emit = async (
    agent: string,
    result: any
  ) => {
    if (onProgress) {
      await onProgress({
        agent,
        result,
      });
    }
  };

  // ===========================
  // Intake
  // ===========================

  const intakeResult =
    await intake(target);

  await emit(
    "intake",
    intakeResult
  );

  if (
    intakeResult.status === "error"
  ) {
    return {
      target,
      intake: intakeResult,
    };
  }

  // ===========================
  // Oracle
  // ===========================

  const oracleResult =
    await oracle();

  await emit(
    "oracle",
    oracleResult
  );

  // ===========================
  // Forge
  // ===========================

  const forgeResult =
    await forge(target);

  await emit(
    "forge",
    forgeResult
  );

  // ===========================
  // Gecko
  // ===========================

  const network =
    forgeResult.data?.chain || "base";

  const geckoResult =
    await gecko(
      network,
      target
    );

  await emit(
    "gecko",
    geckoResult
  );

  // ===========================
  // BaseScan
  // ===========================

  const basescanResult =
    await basescan(
      target
    );

  await emit(
    "basescan",
    basescanResult
  );

  // ===========================
  // Aegis
  // ===========================

  const aegisResult =
    await aegis(
      forgeResult.data,
      basescanResult.data
    );

  await emit(
    "aegis",
    aegisResult
  );

  // ===========================
  // Cipher
  // ===========================

  const cipherResult =
    await cipher(
      forgeResult.data,
      geckoResult.data?.data
    );

  await emit(
    "cipher",
    cipherResult
  );

  // ===========================
  // Trace
  // ===========================

const traceResult =
  await trace(
    forgeResult.data,
    aegisResult.data,
    basescanResult.data
  );

  await emit(
    "trace",
    traceResult
  );

  // ===========================
  // Final Analysis
  // ===========================

  const analysis = {
    target,

    intake: intakeResult,

    oracle: oracleResult,

    forge: forgeResult,

    gecko: geckoResult,

    basescan: basescanResult,

    aegis: aegisResult,

    cipher: cipherResult,

    trace: traceResult,
  };

  // ===========================
  // Report
  // ===========================

  const report =
    buildReport(
      analysis
    );

  await emit(
    "report",
    report
  );

  return {
    ...analysis,

    report,
  };
}