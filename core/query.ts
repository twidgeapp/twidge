import { QueryClient } from "@tanstack/react-query";
import {
    createClient,
    createReactQueryHooks,
    TauriTransport,
} from "@rspc/client";

import type { Operations } from "@twidge/utils/bindings"; // These were the bindings exported from your Rust code!

const client = createClient<Operations>({
    transport: new TauriTransport(),
});

const queryClient = new QueryClient();
const rspc = createReactQueryHooks<Operations>();

export { client, queryClient };
export default rspc;
