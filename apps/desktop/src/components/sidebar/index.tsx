import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { IconPlus } from "@tabler/icons";
import tw from "tailwind-styled-components";
import DialogComponent from "@twidge/components/dialog";
import NewSpaceModal from "../modals/new_space";
import { observer } from "mobx-react";
import SpaceStore from "@twidge/utils/state/spaces";
import rspc from "../../query";
import { useEffect } from "react";
import Space from "./space";

const Separator = tw.div`w-full h-[1px] bg-text`;

interface Props {
	spaceStore: SpaceStore;
}

const Sidebar = observer((props: Props) => {
	const { data } = rspc.useQuery(["spaces.get"]);

	useEffect(() => {
		if (data) {
			props.spaceStore.setSpaces(data);
		}
	}, [data]);

	return (
		<div className="w-16 h-full bg-sidebar flex flex-col gap-3 p-4 border-r border-r-text/10 items-center">
			<Link to="/home">
				<img className="select-none" src={Logo} />
			</Link>
			<div className="w-8 h-8 grid place-items-center rounded-md hover:bg-app-bg transition-all duration-150 cursor-pointer">
				<DialogComponent restoreColors={true} isOpen={undefined} trigger={true}>
					<IconPlus className="text-text bg-transparent" />
					<NewSpaceModal />
				</DialogComponent>
			</div>

			<Separator />
			{props.spaceStore.spaces.map((space, idx) => (
				<Space space={space} key={idx} />
			))}
		</div>
	);
});

export default Sidebar;
