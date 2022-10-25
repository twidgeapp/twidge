import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { IconPlus } from "@tabler/icons";
import tw from "tailwind-styled-components";
import DialogComponent from "@twidge/components/dialog";
import NewSpaceModal from "../modals/new_space";

const Separator = tw.div`w-full h-[1px] bg-text`;

const Sidebar = () => {
	return (
		<div className="w-16 h-full bg-sidebar flex flex-col gap-3 p-4">
			<Link to="/home">
				<img className="select-none" src={Logo} />
			</Link>
			<div className="w-8 h-8 grid place-items-center rounded-md hover:bg-app-bg transition-all duration-150 cursor-pointer">
				<DialogComponent isOpen={undefined} trigger>
					<IconPlus className="text-text"></IconPlus>
					<NewSpaceModal />
				</DialogComponent>
			</div>
			<Separator />
		</div>
	);
};

export default Sidebar;
