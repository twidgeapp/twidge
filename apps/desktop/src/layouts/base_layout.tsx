import React from "react";
import Sidebar from "../components/sidebar";

interface Props {
	children: React.ReactNode;
}

const BaseLayout = (props: Props) => {
	return (
		<div className="w-full h-full flex">
			<Sidebar />
			{props.children}
		</div>
	);
};

export default BaseLayout;
