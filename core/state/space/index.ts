import { createSlice } from "@reduxjs/toolkit";

import type { Spaces } from "@twidge/utils/bindings";

export const spaceStore = createSlice<
    {
        spaces: Spaces[];
    },
    any,
    any
>({
    name: "spaces",
    initialState: {
        spaces: [],
    },
    reducers: {
        setSpaces(state: any, action: any) {
            state.spaces = action.payload;
        },
    },
});

export const { setSpaces } = spaceStore.actions;

export default spaceStore.reducer;
