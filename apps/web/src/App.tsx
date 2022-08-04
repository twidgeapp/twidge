import Sidebar from "@twidge/components/sidebar";
import { styled } from "@twidge/config/stitches.config";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import NAHome from "./pages/home";
import Space from "./pages/spaces/[id]";
import {useEffect} from "react";
import { isRegistered, register } from "@tauri-apps/api/globalShortcut";
import { AnimatePresence } from "framer-motion";

const Root = styled("div", {
  backgroundColor: "$backgroundColor",
  color: "$textColor",
  minWidth: "100vw",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  height: "100%"
});

function App() {
  useEffect(()=>{
    console.log(isRegistered("CommandOrControl+Shift+K+Space"))
  }, [])

  return (
  <AnimatePresence>
    <Root>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<NAHome />} />
        <Route path="/spaces/:id" element={<Space />} />
      </Routes>
    </Root>
    </AnimatePresence>
  );
}

export default App;
