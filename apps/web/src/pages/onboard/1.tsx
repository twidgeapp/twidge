import rspc from "@twidge/core/query";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo.svg";
import OnBoardingLayout from "../../layout/onboarding_layout";

const OnboardingIntro = () => {
    const mutation = rspc.useMutation("settings.set");
    const navigate = useNavigate();

    return (
        <OnBoardingLayout page="1">
            <div className="flex items-center justify-center flex-col gap-4">
                <img src={Logo} width={96} />
                <div className="flex flex-col gap-[6px] items-center justify-center mt-3">
                    <h1 className="text-4xl font-extrabold">
                        Welcome to Twidge
                    </h1>
                    <p className="text-[15px] text-center opacity-60">
                        Twidge is a productivity tool which seamlessly <br />
                        integrates with your workflow
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            navigate("/onboarding/2");
                        }}
                        className="bg-dark-blue4 border border-dark-blue10 text-dark-blue10 hover:bg-dark-blue3 hover:border-dark-blue8 hover:text-dark-blue9 transition text-sm px-7 py-2 rounded-lg w-36"
                    >
                        Continue
                    </button>
                    <button
                        onClick={() => {
                            mutation.mutate({
                                key: "first_run",
                                value: "false",
                            });
                        }}
                        className="bg-dark-mint4 border border-dark-mint8 text-dark-mint9 hover:bg-dark-mint3 hover:border-dark-mint8 hover:text-dark-mint9 transition text-sm px-7 py-2 rounded-lg w-36"
                    >
                        Skip
                    </button>
                </div>
            </div>
        </OnBoardingLayout>
    );
};

export default OnboardingIntro;
