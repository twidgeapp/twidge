import { TRPCError, initTRPC } from "@trpc/server";
import z from "zod";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = t.router({
  whoami: publicProcedure.query(({ ctx }: { ctx: any }) => ctx.user),
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
