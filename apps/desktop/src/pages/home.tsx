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
		null,
		{},
		"GET",
		true
	);
	const { error: userError, response: userResponse, refetch: userRefetch } = useCustomQuery(
		null,
		{},
		"GET",
		true
	);

	useEffect(() => {
		let refresh_token = localStorage.getItem("refresh_token");
		refetch({}, `/auth/token?token=${refresh_token}`)
	}, [])

	useEffect(() => {
		if (error && !isLoading && !response) {
			// there are 2 cases over here
			// 1. User is offline and the request failed
			// 2. This is the first time the app is being opened and the user is not logged in
			if (props.globalStore.isOnline === false) {
				// we ignore and we don't populate the users value
			} else {
				// we set the login to true and show the modal
				setLogin(true);
			}
		} else if (response) {
			/// user is already authenticated
			const { access_token } = response as any;
			userRefetch({}, `/auth/user?token=${access_token}`)
		}
	}, [isLoading, error, response]);

	useEffect(() => {
		if (userResponse) {
			props.globalStore.setUser(userResponse)
		} else if (userError) {
			setLogin(true)
		}
	}, [userResponse, userError])

	return (
		<div className="w-full h-full">
			<DialogComponent isOpen={login}>
				<div></div>
				<Login />
			</DialogComponent>
			{JSON.stringify(props.globalStore.user)}
		</div>
	);
});

export default HomePage;
