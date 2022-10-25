import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { IconPlus } from "@tabler/icons";
import tw from "tailwind-styled-components";
import DialogComponent from "@twidge/components/dialog";
import NewSpaceModal from "../modals/new_space";
import { observer } from "mobx-react";
import SpaceStore from "@twidge/utils/state/spaces";

const Separator = tw.div`w-full h-[1px] bg-text`;

interface Props {
	spaceStore: SpaceStore
}

const Sidebar = observer((props: Props) => {
	return (
		<div className="w-16 h-full bg-sidebar flex flex-col gap-3 p-4">
			<Link to="/home">
				<img className="select-none" src={Logo} />
			</Link>
			<div className="w-8 h-8 grid place-items-center rounded-md hover:bg-app-bg transition-all duration-150 cursor-pointer">
				<DialogComponent isOpen={undefined} trigger={true}>
					<IconPlus className="text-text" />
					<NewSpaceModal />
				</DialogComponent>
			</div>
			<Separator />
			{props.spaceStore.spaces.map((space) => (
				<div
					key={space.id}
				>
					{space.name}
				</div>
			))}
		</div>
	);
});

export default Sidebar;
