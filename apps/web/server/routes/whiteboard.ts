import {protectedProcedure, router} from '../server';
import zod from 'zod';
import {TRPCError} from '@trpc/server';

const createWhiteboardSchema = zod.object({
    name: zod.string(),
    icon: zod.string(),

    space_id: zod.string()
});

export const whiteboardRouter = router({
    create: protectedProcedure.input(createWhiteboardSchema).mutation(async ({ctx, input}) => {
        const {user, prisma} = ctx;

        if (!user)
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Unauthorized',
                cause: 'No session',
            });

        const whiteboard = await prisma.whiteboards.create({
            data: {
                name: input.name,
                icon: input.icon,
                permissions: {
                    'admin': [
                        user.id
                    ]
                },
                spaces: {
                    connect: {
                        id: input.space_id
                    }
                }
            },
        });

        return whiteboard;
    }),
});