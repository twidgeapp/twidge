import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import state, { Provider } from "@twidge/core/state";
import rspc, { client, queryClient } from "@twidge/core/query";
import { unstable_HistoryRouter as HistoryRouter } from "@twidge/core/router";

import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={state}>
      <HistoryRouter history={history}>
        <rspc.Provider client={client} queryClient={queryClient}>
          <App />
        </rspc.Provider>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
