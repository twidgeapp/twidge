import Logo from "../assets/logo.svg";
import rspc from "../query";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "@twidge/utils/ctx";

const LoadingPage = () => {
	const { isLoading } = rspc.useQuery(["misc.run_migrations"]);
	const { globalStore } = useContext(GlobalContext);

	if (isLoading) {
		return (
			<div className="w-full h-full bg-main-bg flex flex-col items-center justify-center gap-5">
				<img src={Logo} className="select-none" />
				<div className="w-60 h-1 shim-Accent50" />
			</div>
		);
	} else {
		return <Navigate to="/home" />;
	}
};

export default LoadingPage;
