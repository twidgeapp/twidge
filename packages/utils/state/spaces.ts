import create from "zustand";
import Spaces, { Space } from "../types/spaces";

interface ISpaceStore {
  spaces: Spaces;
  addSpace: (space: Space) => void;
  overwriteSpaces: (space: Spaces) => void;
}

const useSpaceStore = create<ISpaceStore>((set) => ({
  spaces: [],
  addSpace: (space: Space) => {
    set((state) => ({
      spaces: [...state.spaces, space],
      addSpace: state.addSpace,
      overwriteSpaces: state.overwriteSpaces,
    }));
  },
  overwriteSpaces: (spaces: Spaces) => {
    set((state) => ({
      spaces: spaces,
      addSpace: state.addSpace,
      overwriteSpaces: state.overwriteSpaces,
    }));
  },
}));

export default useSpaceStore;
