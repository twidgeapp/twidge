import { Spaces } from "@twidge/utils/bindings";
import { createContext } from "react";

interface ISpaceContextProps {
  spaceInfo: Spaces | null | undefined;
}

const SpaceContext = createContext<ISpaceContextProps>({
  spaceInfo: null,
});

export default SpaceContext;
