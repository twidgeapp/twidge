import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import { IconPlus } from "@tabler/icons"
import tw from "tailwind-styled-components"

const Separator = tw.div`w-full h-[1px] bg-text`

const Sidebar = () => {
    return (
        <div className="w-16 h-full bg-sidebar flex flex-col gap-3 p-4">
            <Link to="/home">
                <img className="select-none" src={Logo} />
            </Link>
            <div className="w-8 h-8 grid place-items-center rounded-md hover:bg-app-bg transition-all duration-150 cursor-pointer">
                <IconPlus className="text-text"></IconPlus>
            </div>
            <Separator />
        </div>
    )
}

export default Sidebar;