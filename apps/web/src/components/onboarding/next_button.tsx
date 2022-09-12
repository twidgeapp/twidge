import { useNavigate } from "react-router";

const NextButton = ({ page }: { page: string }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                navigate(`/onboarding/${parseInt(page)}`);
            }}
            className="bg-dark-blue4 border border-dark-blue10 text-dark-blue10 hover:bg-dark-blue3 hover:border-dark-blue8 hover:text-dark-blue9 transition text-sm px-7 py-2 rounded-lg w-36 absolute bottom-4"
        >
            Continue
        </button>
    );
};

export default NextButton;
