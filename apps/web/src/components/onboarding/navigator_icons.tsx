import { useNavigate } from "react-router";

const NavigatorPages = [
    {
        url: "/onboarding/1",
        name: "1",
    },
    {
        url: "/onboarding/2",
        name: "2",
    },
    {
        url: "/onboarding/3",
        name: "3",
    },
];

const NavigatorIcons = ({ page }: { page: string }) => {
    const navigate = useNavigate();

    return (
        <div className="flex gap-2">
            {NavigatorPages.map((p) => (
                <div
                    key={p.url}
                    onClick={() => {
                        navigate(p.url);
                    }}
                    className={`w-2 h-2 rounded-full cursor-pointer = ${
                        p.name === page
                            ? "bg-dark-blue10"
                            : "bg-white opacity-60"
                    }`}
                />
            ))}
        </div>
    );
};

export default NavigatorIcons;
