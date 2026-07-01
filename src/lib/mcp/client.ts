import { Client } from "@modelcontextprotocol/sdk/client/index.js";

import {
  StreamableHTTPClientTransport,
} from "@modelcontextprotocol/sdk/client/streamableHttp.js";

let client: Client | null = null;

export async function getMCPClient() {

  if (client) {

    return client;

  }

  client = new Client({

    name: "x6-forge",

    version: "0.1.0",

  });

  const transport =
    new StreamableHTTPClientTransport(

      new URL(
        "https://mcp.base.org"
      )

    );

  await client.connect(
    transport
  );

  return client;

}