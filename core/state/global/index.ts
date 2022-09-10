import { createSlice } from "@reduxjs/toolkit";

export const globalStore = createSlice({
    name: "global",
    initialState: {
        loaded: false,
        version: "",
        platform: "",
    },
    reducers: {
        setLoaded: (state, action) => {
            state.loaded = action.payload;
        },
        setVersion: (state, action) => {
            state.version = action.payload;
        },
        setPlatform(state, action) {
            state.platform = action.payload;
        },
    },
});

export const { setLoaded, setVersion, setPlatform } = globalStore.actions;
export default globalStore.reducer;
