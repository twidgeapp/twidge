import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@twidge/config/colors.css";
import rspc, { client, queryClient } from "./query";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<rspc.Provider client={client} queryClient={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</rspc.Provider>
	</React.StrictMode>,
);
