import GlobalStore from "@twidge/utils/state/global";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import useCustomQuery from "../hooks/useCustomQuery";
import DialogComponent from "@twidge/components/dialog";
import Login from "../components/login";
interface HomePageProps {
	globalStore: GlobalStore;
}

const HomePage = observer((props: HomePageProps) => {
	const [login, setLogin] = useState(false);
	const { error, isLoading, refetch, response } = useCustomQuery(
		"/auth/user",
		{},
		"GET",
	);

	useEffect(() => {
		if (error && !isLoading) {
			// there are 2 cases over here
			// 1. User is offline and the request failed
			// 2. This is the first time the app is being opened and the user is not logged in
			if (props.globalStore.isOnline === false) {
				// we ignore and we don't populate the users value
			} else {
				// we set the login to false and show the modal
				setLogin(true);
			}
		}
	}, [isLoading, error]);
	return (
		<div className="w-full h-full">
			<DialogComponent>
				<div>asdasd</div>
				<Login />
			</DialogComponent>
		</div>
	);
});

export default HomePage;
