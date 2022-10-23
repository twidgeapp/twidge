import { styled } from "@twidge/config/stitches.config";
import usePlatform from "./hooks/usePlatform";
import rspc from "./query";
import { observer } from "mobx-react";
import Global from "@twidge/utils/state/global";
import React, { useContext } from "react";
import GlobalContext, { IGlobalContext } from "@twidge/utils/ctx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Routes,
	useLocation,
} from "react-router-dom";
import LoadingPage from "./pages/loading";
import OnboardingPage from "./pages/onboarding/index";
import OnboardingPage1 from "./pages/onboarding/1";
import { AnimatePresence } from "framer-motion";
import OnboardingPage2 from "./pages/onboarding/2";
import OnboardingPage3 from "./pages/onboarding/3";
import OnboardingPage4 from "./pages/onboarding/4";
import OnboardingPage5 from "./pages/onboarding/5";

const HomePage = React.lazy(() => import("./pages/home"));

const Root = styled("div", {
	width: "100%",
	height: "100%",
	borderRadius: "12px",
});

const App = observer(({ globalStore }: { globalStore: Global }) => {
	const { data } = rspc.useQuery(["version"], {
		onSuccess: (e) => {
			globalStore.setVersion(e);
		},
	});
	const platform = usePlatform();
	const location = useLocation();

	return (
		<Root>
			<AnimatePresence exitBeforeEnter>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<LoadingPage />}></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/onboarding" element={<OnboardingPage />} />
					<Route path="/onboarding/1" element={<OnboardingPage1 />} />
					<Route path="/onboarding/2" element={<OnboardingPage2 />} />
					<Route path="/onboarding/3" element={<OnboardingPage3 />} />
					<Route path="/onboarding/4" element={<OnboardingPage4 />} />
					<Route path="/onboarding/5" element={<OnboardingPage5 />} />
				</Routes>
			</AnimatePresence>
		</Root>
	);
});

const RootApp = () => {
	const ctx = useContext<IGlobalContext>(GlobalContext);
	return <App globalStore={ctx.globalStore} />;
};

export default RootApp;
