import { router } from '../server';
import { healthCheckRouter } from './healthcheck';
import { userRouter } from './user';

export const appRouter = router({
    healthCheck: healthCheckRouter,
    user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
