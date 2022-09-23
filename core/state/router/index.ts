import { createSlice } from "@reduxjs/toolkit";

export const routerStore = createSlice({
  name: "router",
  initialState: {
    forwardRoutes: [],
    backRoutes: [],
    routeHistory: [],
  },
  reducers: {
    setForwardRoutes(state: any, action: any) {
      state.forwardRoutes = action.payload;
    },
    setBackRoutes(state: any, action: any) {
      if (
        state.backRoutes[state.backRoutes.length - 1] !== action.payload &&
        action.payload !== "/" // we don't want to add the / page to the back routes as it just shows a loader
      ) {
        state.backRoutes = [...state.backRoutes, action.payload];
        console.log(state.backRoutes);
      }
      console.log("Setbackroutes trickered");
    },
    setRouteHistory(state: any, action: any) {
      state.routeHistory = [...state.routeHistory, action.payload];
    },
    popBackRoutes(state: any) {
      const removedElement = state.backRoutes.pop();
      state.forwardRoutes = [...state.forwardRoutes, removedElement];
    },
    popForwardRoutes(state: any) {
      const removedElement = state.forwardRoutes.pop();
      state.backRoutes = [...state.backRoutes, removedElement];
    },
  },
});

export const {
  setBackRoutes,
  setForwardRoutes,
  setRouteHistory,
  popBackRoutes,
  popForwardRoutes,
} = routerStore.actions;

export default routerStore.reducer;
