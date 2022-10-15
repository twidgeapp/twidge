import { ThemeProvider } from "next-themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { darkTheme, globalCss } from "@twidge/config/stitches.config";
import rspc, { client, queryClient } from "./query";

const css = globalCss({
  body: {
    fontFamily: "'Mulish', sans-serif",
    backgroundColor: "$violet1",
  },
});

css();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <rspc.Provider client={client} queryClient={queryClient}>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: "light",
          dark: darkTheme.className,
        }}
      >
        <App />
      </ThemeProvider>
    </rspc.Provider>
  </React.StrictMode>
);
