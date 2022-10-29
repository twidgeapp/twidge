import { createContext } from "react";
import GlobalStore from "./state/global";
import SpaceStore from "./state/spaces";

export interface IGlobalContext {
    globalStore: GlobalStore;
    spaceStore: SpaceStore;
}

const GlobalContext = createContext<IGlobalContext>({
    globalStore: new GlobalStore(),
    spaceStore: new SpaceStore(),
});

export default GlobalContext;
