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
                            mutation.mutate({
                                key: "first_run",
                                value: "false",
                            });
                        }}
                        className="bg-dark-gray4 border border-dark-gray8 text-dark-gray12 hover:bg-dark-gray3 hover:border-dark-gray8 hover:text-dark-gray9 transition text-sm px-7 py-2 rounded-lg w-36"
                    >
                        Skip
                    </button>

                    <button
                        onClick={() => {
                            navigate("/onboarding/2");
                        }}
                        className="bg-dark-pink4 border border-dark-pink10 text-dark-pink10 hover:bg-dark-pink3 hover:border-dark-pink8 hover:text-dark-pink9 transition text-sm px-7 py-2 rounded-lg w-36"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </OnBoardingLayout>
    );
};

export default OnboardingIntro;
