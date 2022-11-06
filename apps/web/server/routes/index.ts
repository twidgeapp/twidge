import { router } from '../server';
import { healthCheckRouter } from './healthcheck';
import { spaceRouter } from './spaces';
import storageRouter from './storage';
import { userRouter } from './user';
import { whiteboardRouter } from './whiteboard';

export const appRouter = router({
    healthCheck: healthCheckRouter,
    user: userRouter,
    spaces: spaceRouter,
    whiteboard: whiteboardRouter,
    storage: storageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
