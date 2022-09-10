import { createContext } from "react";

interface IMenuBarContext {
    maximised: boolean;
    setMaximised: (maximised: boolean) => void;
}

const MenuBarContext = createContext<IMenuBarContext>({
    maximised: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    setMaximised: () => {},
});

export default MenuBarContext;
