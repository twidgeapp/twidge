import { createContext } from "react";
import GlobalStore from "./state/global";

export interface IGlobalContext {
	globalStore: GlobalStore;
}

const GlobalContext = createContext<IGlobalContext>({
	globalStore: new GlobalStore(),
});

export default GlobalContext;
