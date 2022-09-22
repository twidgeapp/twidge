import rspc from "@twidge/core/query";
import Button from "@twidge/ui/button";
import { useNavigate } from "react-router";

const NextButton = ({ page, back }: { page: string; back?: boolean }) => {
    const mutation = rspc.useMutation("settings.set");

    const navigate = useNavigate();

    return (
        <div className="absolute bottom-4 flex gap-3">
            {!back && (
                <Button
                    buttonSize={"large"}
                    fontWeight={"normal"}
                    font={"xs"}
                    color={"gray"}
                    onClick={() => {
                        navigate(`/onboarding/${parseInt(page) - 2}`);
                    }}
                >
                    Back
                </Button>
            )}

            <Button
                buttonSize={"large"}
                fontWeight={"normal"}
                font={"xs"}
                color={"pink"}
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
            >
                {back ? "Finish" : "Continue"}
            </Button>
        </div>
    );
};

export default NextButton;
