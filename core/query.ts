import { QueryClient } from "@tanstack/react-query";
import {
  createClient,
} from "@rspc/client";
import {  TauriTransport } from "@rspc/tauri";
import { createReactQueryHooks } from "@rspc/react";

import type { Procedures } from "@twidge/utils/bindings"; // These were the bindings exported from your Rust code!

const client = createClient<Procedures>({
  transport: new TauriTransport(),
});

const queryClient = new QueryClient();
const rspc = createReactQueryHooks<Procedures>();

export { client, queryClient };
export default rspc;
