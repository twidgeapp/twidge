import { appWindow } from "@tauri-apps/api/window";
import { useSelector } from "@twidge/core/state";
import { globalStore } from "@twidge/core/state/global";
import { useEffect, useState } from "react";
import WindowsMenuBar from "../components/menu-bar/windows";
import MenuBarContext from "../components/menu-bar/windows/ctx";

const Home = () => {
  const [rounded, setRounded] = useState("md");
  const [maximised, setMaximised] = useState(false);
  const platform = useSelector((state: any) => state.global.platform);

  useEffect(() => {
    appWindow.isMaximized().then((vl) => {
      setRounded(vl ? "none" : "md");
    });
  }, []);

  return (
    <MenuBarContext.Provider
      value={{
        maximised: maximised,
        setMaximised: setMaximised,
      }}
    >
      <MenuBarContext.Consumer>
        {(value) => (
          <div
            className={`bg-black bg-opacity-90 w-full h-full ${
              value.maximised ? "" : "rounded-md"
            }`}
          >
            {platform === "win32" ? <WindowsMenuBar /> : <></>}
          </div>
        )}
      </MenuBarContext.Consumer>
    </MenuBarContext.Provider>
  );
};

export default Home;
