import { publicProcedure, router } from '../server';

export const healthCheckRouter = router({
    check: publicProcedure.query(() => {
        return {
            status: 'ok',
        };
    }),
});
