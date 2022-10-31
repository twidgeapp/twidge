import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createContext } from "../../server/context";
import { appRouter } from "../../server/server";

export default createNextApiHandler({
  router: appRouter,
  createContext(opts) {
    return createContext({
      type: "api",
      ...opts,
    });
  },
});
