import rspc from "@twidge/core/query";
import { useNavigate } from "react-router";

const NextButton = ({ page, back }: { page: string; back?: boolean }) => {
    const mutation = rspc.useMutation("settings.set");

    const navigate = useNavigate();

    return (
        <div className="absolute bottom-4 flex gap-3">
            {!back && (
                <button
                    onClick={() => {
                        navigate(`/onboarding/${parseInt(page) - 2}`);
                    }}
                    className="bg-dark-gray4 border border-dark-gray10 text-dark-gray12 hover:bg-dark-gray3 hover:border-dark-gray8 hover:text-dark-gray9 transition text-sm px-7 py-2 rounded-lg w-36"
                >
                    Back
                </button>
            )}

            <button
                onClick={() => {
                    if (!back) {
                        navigate(`/onboarding/${parseInt(page)}`);
                    } else {
                        mutation
                            .mutateAsync({
                                key: "first_run",
                                value: "false",
                            })
                            .then(() => {
                                setTimeout(() => {
                                    window.location.replace("/");
                                }, 500);
                            });
                    }
                }}
                className="bg-dark-pink4 border border-dark-pink10 text-dark-pink10 hover:bg-dark-pink3 hover:border-dark-pink8 hover:text-dark-pink9 transition text-sm px-7 py-2 rounded-lg w-36"
            >
                {back ? "Finish" : "Continue"}
            </button>
        </div>
    );
};

export default NextButton;
