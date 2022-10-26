import GlobalContext from "@twidge/utils/ctx";
import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoadingPage from "./pages";
import HomePage from "./pages/home";
import rspc from "./query";
import { listen } from "@tauri-apps/api/event";
import LoginPage from "./pages/login";
import SpacePage from "./pages/space/[id]";

function App() {
	const { globalStore, spaceStore } = useContext(GlobalContext);
	const navigate = useNavigate();
	const { isLoading } = rspc.useQuery(["misc.is_online"], {
		onSuccess: (data) => {
			if (data === undefined || data === false) {
				globalStore.setIsOnline(false);
			} else {
				globalStore.setIsOnline(true);
			}
		},
	});

	useEffect(() => {
		const loginUnlisten = listen("login", (e) => {
			const unique_id = e.payload;
			navigate(`/login?unique_id=${unique_id}`);
		});
		return () => {};
	}, []);

	return (
		<div className="w-screen h-screen bg-app-bg text-text-light font-inter">
			<Routes>
				<Route path="/" element={<LoadingPage />} />
				<Route path="/home" element={<HomePage globalStore={globalStore} />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/space/:id"
					element={<SpacePage spaceStore={spaceStore} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
