import { createContext } from "react";

interface IMenuBarContext {
  maximised: boolean;
  setMaximised: (maximised: boolean) => void;
}

const MenuBarContext = createContext<IMenuBarContext>({
  maximised: false,
  setMaximised: () => {},
});

export default MenuBarContext;
