import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";
import spaceReducer from "./space";
import routerReducer from "./router";
import notesReducer from "./space/notes";

export * from "react-redux";
export default configureStore({
    reducer: {
        global: globalReducer,
        spaces: spaceReducer,
        router: routerReducer,
        notes: notesReducer,
    },
});
