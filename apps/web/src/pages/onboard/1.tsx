import rspc from "@twidge/core/query";
import Logo from "../../assets/logo.svg";

const OnboardingIntro = () => {
    const mutation = rspc.useMutation("settings.set");

    return (
        <div
            className={
                "bg-black bg-opacity-90 w-full h-full rounded-md flex items-center justify-center text-white selection:bg-dark-blue11 selection:bg-opacity-50"
            }
        >
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
                    <button className="bg-dark-blue4 border border-dark-blue10 text-dark-blue10 hover:bg-dark-blue3 hover:border-dark-blue8 hover:text-dark-blue9 transition text-sm px-7 py-2 rounded-lg w-36">
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
        </div>
    );
};

export default OnboardingIntro;
