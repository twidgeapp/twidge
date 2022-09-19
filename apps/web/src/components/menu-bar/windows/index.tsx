import { useContext } from "react";
import MenuBarContext from "./ctx";
import WindowsTrafficLights from "./traffic_light";

const WindowsMenuBar = () => {
    const ctx = useContext(MenuBarContext);

    return (
        <div
            data-tauri-drag-region
            className={`absolute w-[calc(100vw-56px)] top-0 right-0 h-10 flex items-center justify-end pl-4 ${
                ctx.maximised ? "" : "rounded-tl-md rounded-tr-md"
            }`}
        >
            <WindowsTrafficLights />
        </div>
    );
};

export default WindowsMenuBar;
