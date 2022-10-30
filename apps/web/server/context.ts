import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

import prisma from '../utils/prisma';

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
    const { req, res } = ctx;

    return {
        req,
        res,
        prisma,
    };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
