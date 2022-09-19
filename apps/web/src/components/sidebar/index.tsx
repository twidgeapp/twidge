import { useSelector } from "@twidge/core/state";
import Image from "../../assets/logo.svg";
import { Link } from "@twidge/core/router";
import Element from "./element";
import { Add20Filled } from "@fluentui/react-icons";

const LineBreak = () => (
    <div className="border-b w-3/5 h-1 border-dark-gray11"></div>
);

const Sidebar = () => {
    const platform = useSelector((state: any) => state.global.platform);

    return (
        <div
            className="flex flex-col w-14 h-full items-center justify-start bg-dark-gray1 py-3 gap-2"
            style={{
                borderTopLeftRadius: platform === "win32" ? "12px" : "",
                borderBottomLeftRadius: platform === "win32" ? "12px" : "",
            }}
        >
            <Link to="/home">
                <img className="w-6 h-6 select-none" src={Image} />
            </Link>
            <Element icon={<Add20Filled />} />
            <LineBreak />
        </div>
    );
};

export default Sidebar;
