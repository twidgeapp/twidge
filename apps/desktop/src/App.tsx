import GlobalContext from "@twidge/utils/ctx";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages";
import HomePage from "./pages/home";
import rspc from "./query";

function App() {
	const { globalStore } = useContext(GlobalContext);

	const { isLoading } = rspc.useQuery(["misc.is_online"], {
		onSuccess: (data) => {
			if (data === undefined || data === false) {
				globalStore.setIsOnline(false);
			} else {
				globalStore.setIsOnline(true);
			}
		},
	});

	return (
		<div className="w-screen h-screen bg-app-bg text-text-light">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoadingPage />} />
					<Route
						path="/home"
						element={<HomePage globalStore={globalStore} />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
