import { protectedProcedure, router } from '../server';

export const spaceRouter = router({
    get: protectedProcedure.query(async ({ ctx }) => {
        const id = ctx.user?.id;

        const spaces = await ctx.prisma.spaces.findMany({
            where: {
                ownerId: id,
            },
            include: {
                owner: true,
            },
        });

        return spaces;
    }),
});
