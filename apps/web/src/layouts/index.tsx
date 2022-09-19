import { appWindow } from "@tauri-apps/api/window";
import rspc from "@twidge/core/query";
import { useSelector } from "@twidge/core/state";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import WindowsMenuBar from "../components/menu-bar/windows";
import MenuBarContext from "../components/menu-bar/windows/ctx";
import Sidebar from "../components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const firstRun = rspc.useQuery(["settings.get", { key: "first_run" }]);
    const [_rounded, setRounded] = useState("md");
    const [maximised, setMaximised] = useState(false);
    const platform = useSelector((state: any) => state.global.platform);
    const navigate = useNavigate();

    useEffect(() => {
        appWindow.isMaximized().then((vl) => {
            setRounded(vl ? "none" : "md");
        });
    }, []);

    useEffect(() => {
        const data: any = firstRun.data;

        if (data) {
            if (data.value === "true") {
                navigate("/onboarding/1");
            }
        }
    }, [firstRun.data]);

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
                        className={`bg-black text-white bg-opacity-90 w-full h-full ${
                            value.maximised ? "" : "rounded-md"
                        }`}
                    >
                        {platform === "win32" ? <WindowsMenuBar /> : <></>}
                        <div className={"w-full h-full flex"}>
                            <Sidebar />
                            {children}
                        </div>
                    </div>
                )}
            </MenuBarContext.Consumer>
        </MenuBarContext.Provider>
    );
};

export default Layout;
