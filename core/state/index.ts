import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global";

export * from "react-redux";
export default configureStore({
    reducer: {
        global: globalReducer,
    },
});
