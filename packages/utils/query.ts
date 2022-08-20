import { QueryClient } from '@tanstack/react-query';
import { Operations } from './index';
import {
	createClient,
	createReactQueryHooks,
	TauriTransport,
} from '@rspc/client';

export const queryClient = new QueryClient();
export const client = createClient<Operations>({
	// Refer to the integration your using for the correct transport.
	transport: new TauriTransport(),
});

const rspc = createReactQueryHooks<Operations>();

export default rspc;
