import Index from "./pages";
import Home from "./pages/home";
import { Route, Routes } from "@twidge/core/router";
import OnboardingIntro from "./pages/onboard/1";
import OnBoardingPage2 from "./pages/onboard/2";
import OnBoardingPage3 from "./pages/onboard/3";
import OnBoardingPage4 from "./pages/onboard/4";
import OnBoardingPage5 from "./pages/onboard/6";

function App() {
    return (
        <div className="w-screen h-screen bg-white rounded-md">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="/onboarding">
                    <Route path="1" element={<OnboardingIntro />} />
                    <Route path="2" element={<OnBoardingPage2 />} />
                    <Route path="3" element={<OnBoardingPage3 />} />
                    <Route path="4" element={<OnBoardingPage4 />} />
                    <Route path="5" element={<OnBoardingPage5 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
