import { Account, PrismaClient, Session, User } from '@prisma/client';
import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';

interface Context {
    session?: {
        user: {
            name: string;
            email: string;
            image: string;
        };
        user_id: string;
    };
    user: User & {
        sessions: Session[];
    };
    prisma: PrismaClient;
    [key: string]: any;
}

const t = trpc.initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const authenticatedMiddleware = t.middleware(async ({ ctx, next }) => {
    if (!ctx.session)
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Unauthorized',
            cause: 'No session',
        });

    const user = await ctx.prisma.user.findUnique({
        where: {
            id: ctx.session.user_id,
        },
        include: {
            sessions: true,
        },
    });

    return next({
        ctx: {
            ...ctx,
            user: user,
        },
    });
});

export const protectedProcedure = t.procedure.use(authenticatedMiddleware);
