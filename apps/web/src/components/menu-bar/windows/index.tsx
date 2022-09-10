import { useContext } from "react";
import Logo from "../../../assets/logo.svg";
import MenuBarContext from "./ctx";
import WindowsTrafficLights from "./traffic_light";

const WindowsMenuBar = () => {
    const ctx = useContext(MenuBarContext);

    return (
        <div
            data-tauri-drag-region
            className={`w-full h-10 flex items-center justify-between pl-4 ${
                ctx.maximised ? "" : "rounded-tl-md rounded-tr-md"
            }`}
        >
            <div>
                <img src={Logo} width="16px" />
            </div>
            <WindowsTrafficLights />
        </div>
    );
};

export default WindowsMenuBar;
