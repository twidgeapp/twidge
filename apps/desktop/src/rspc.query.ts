import { QueryClient } from '@tanstack/react-query';
import { createClient } from '@rspc/client';
import { createReactQueryHooks } from '@rspc/react';
import { TauriTransport } from "@rspc/tauri"

import type { Procedures } from "@twidge/utils/bindings";

const client = createClient<Procedures>({
    transport: new TauriTransport(),
});


const queryClient = new QueryClient();
const rspc = createReactQueryHooks<Procedures>();

export { client, queryClient, rspc };