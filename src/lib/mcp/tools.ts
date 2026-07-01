import {
  getMCPClient,
} from "./client";

export async function listMCPTools() {

  const client =
    await getMCPClient();

  const result =
    await client.listTools();

  return result.tools;

}