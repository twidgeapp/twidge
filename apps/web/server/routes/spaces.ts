import { protectedProcedure, router } from '../server';
import zod from 'zod';

const createSchema = zod.object({
    name: zod.string(),
    description: zod.string(),
    color: zod.object({
        iconColor: zod.string(),
        accentColor: zod.number(),
        primaryColor: zod.number(),
    }),
    icon: zod.string(),
});

export const spaceRouter = router({
    get: protectedProcedure.query(async ({ ctx }) => {
        const id = ctx.user?.id;

        const spaces = await ctx.prisma.spaces.findMany({
            where: {
                ownerId: id,
            },
            include: {
                owner: true,
                whiteboards: true,
            },
        });

        return spaces;
    }),
    create: protectedProcedure
        .input(createSchema)
        .mutation(async ({ ctx, input }) => {
            const id = ctx.user?.id;

            const space = await ctx.prisma.spaces.create({
                data: {
                    name: input.name,
                    description: input.description,

                    colors: input.color,
                    icon: input.icon,
                    owner: {
                        connect: {
                            id,
                        },
                    },
                    plan: 'FREE',
                },
            });

            return space;
        }),
});
