import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

import prisma from '../utils/prisma';

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
    const { req, res } = ctx;
    const session = await getSession({ req });
    console.log(session)
    return {
        req,
        res,
        prisma,
        session,
    };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
