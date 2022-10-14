import { createSlice } from "@reduxjs/toolkit";

import type { Notes } from "@twidge/utils/bindings";

export const notesStore = createSlice<
    {
        notes: Notes[];
    },
    any,
    any
>({
    name: "notes",
    initialState: {
        notes: [],
    },
    reducers: {
        setNotes(state: any, action: any) {
            console.log(action.payload);
            state.notes = action.payload;
        },
    },
});

export const { setNotes } = notesStore.actions;

export default notesStore.reducer;
