import GlobalContext from "@twidge/utils/ctx";
import React, { useContext } from "react";
import Sidebar from "../components/sidebar";

interface Props {
	children: React.ReactNode;
}

const BaseLayout = (props: Props) => {
	const { spaceStore } = useContext(GlobalContext)

	return (
		<div className="w-full h-full flex">
			<Sidebar spaceStore={spaceStore} />
			{props.children}
		</div>
	);
};

export default BaseLayout;
