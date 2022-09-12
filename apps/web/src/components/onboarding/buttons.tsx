import { useNavigate } from "react-router";

const NextButton = ({ page }: { page: string }) => {
    const navigate = useNavigate();

    return (
        <div className="absolute bottom-4 flex gap-3">
            <button
                onClick={() => {
                    navigate(`/onboarding/${parseInt(page) - 2}`);
                }}
                className="bg-dark-gray4 border border-dark-gray10 text-dark-gray12 hover:bg-dark-gray3 hover:border-dark-gray8 hover:text-dark-gray9 transition text-sm px-7 py-2 rounded-lg w-36"
            >
                Back
            </button>
            <button
                onClick={() => {
                    navigate(`/onboarding/${parseInt(page)}`);
                }}
                className="bg-dark-blue4 border border-dark-blue10 text-dark-blue10 hover:bg-dark-blue3 hover:border-dark-blue8 hover:text-dark-blue9 transition text-sm px-7 py-2 rounded-lg w-36"
            >
                Continue
            </button>
        </div>
    );
};

export default NextButton;
