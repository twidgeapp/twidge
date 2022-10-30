import { protectedProcedure, router } from '../server';

export const userRouter = router({
    get: protectedProcedure.query(({ ctx }) => {
        return ctx.user;
    }),
});
