import {
  MCPTarget,
} from "../types";

export function resolveTarget(
  input: string
): MCPTarget {

  const value =
    input.trim();

  // Contract / Wallet

  if (/^0x[a-fA-F0-9]{40}$/.test(value)) {

    return {

      type: "contract",

      value,

    };

  }

  // Transaction

  if (/^0x[a-fA-F0-9]{64}$/.test(value)) {

    return {

      type: "transaction",

      value,

    };

  }

  // Token Symbol

  if (/^[A-Za-z]{2,10}$/.test(value)) {

    return {

      type: "token",

      value,

    };

  }

  // General Question

  if (value.length > 10) {

    return {

      type: "question",

      value,

    };

  }

  return {

    type: "unknown",

    value,

  };

}