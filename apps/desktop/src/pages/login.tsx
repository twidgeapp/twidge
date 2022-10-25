import { useEffect } from "react";
import useCustomQuery from "../hooks/useCustomQuery";

const LoginPage = () => {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const unique_id = urlSearchParams.get("unique_id");
	const { response } = useCustomQuery<{
		refresh_token: string;
	}>(`/auth/tokens/get?unique_id=${unique_id}`, {}, "GET");


	useEffect(() => {
		if (response?.refresh_token) {
			localStorage.setItem("refresh_token", response.refresh_token.replace('"', ""));
			window.location.replace("/")
		}
	}, [response]);

	return (
		<div className="w-full h-full">
			<h1>Logging in</h1>
		</div>
	);
};

export default LoginPage;
