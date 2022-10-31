import { createTRPCNextLayout } from "./@trpc/next_layout";
import { createContext } from "./context";
import { appRouter } from "./server";
import { getUser } from "./rsc/getUser";

export const rsc = createTRPCNextLayout({
  router: appRouter,
  createContext() {
    return createContext({
      type: "rsc",
      getUser,
    });
  },
});
