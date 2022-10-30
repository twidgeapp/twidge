import * as trpc from '@trpc/server';

const t = trpc.initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
