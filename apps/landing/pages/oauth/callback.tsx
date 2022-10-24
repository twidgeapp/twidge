import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const CallbackPage = () => {
	const [unique_id, setUniqueId] = useState("");
	const [error, setError] = useState("");

	const openDesktopApp = () => {
		// desktop apps deamon runs at http://localhost:42690
		if (unique_id !== "") {
			axios
				.get(`http://localhost:42690/login?unique_id=${unique_id}`)
				.then((res) => {
					console.log(res.data);
				});
		}
	};

	useEffect(() => {
		openDesktopApp();
	}, [unique_id]);

	useEffect(() => {
		// get the url query params
		const params = new URLSearchParams(window.location.search);
		axios
			.get(
				`${
					process.env.NEXT_PUBLIC_API_URL
				}/auth/google/callback?${params.toString()}`,
			)
			.then((e) => {
				console.log(e.data["unique_id"]);
				setUniqueId(e.data["unique_id"]);
			})
			.catch((err) => {
				setError(err.response.data.message);
			});
	}, []);

	return (
		<div className="bg-bg w-screen h-screen flex items-center flex-col justify-center gap-3 text-white">
			<Image
				src="/assets/logo.svg"
				width={100}
				height={100}
				className="animate-pulse"
			/>
			<h1 className="text-3xl">
				{unique_id ? "Generated keys 🔐" : "Generating keys 🔐"}
			</h1>
			{unique_id && (
				<div className="flex flex-col gap-2 mt-2 items-center">
					<p className="text-xl">
						Opening desktop app{" "}
						<span>
							Click <button onClick={openDesktopApp}>here</button> to open
						</span>
					</p>
				</div>
			)}
			{error && <h1 className="text-3xl">{error}</h1>}
		</div>
	);
};

export default CallbackPage;
