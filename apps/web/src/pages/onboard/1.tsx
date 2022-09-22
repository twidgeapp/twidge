import rspc from "@twidge/core/query";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo.svg";
import OnBoardingLayout from "../../layout/onboarding_layout";
import Button from "@twidge/ui/button";

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
                    <Button
                        buttonSize={"large"}
                        fontWeight={"normal"}
                        font={"xs"}
                        color={"gray"}
                        onClick={() => {
                            mutation.mutate({
                                key: "first_run",
                                value: "false",
                            });
                        }}
                    >
                        Skip
                    </Button>

                    <Button
                        onClick={() => {
                            navigate("/onboarding/2");
                        }}
                        buttonSize={"large"}
                        fontWeight={"normal"}
                        font={"xs"}
                        color={"pink"}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </OnBoardingLayout>
    );
};

export default OnboardingIntro;
