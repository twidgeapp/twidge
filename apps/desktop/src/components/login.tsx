import Logo from "../assets/logo.svg";
import useCustomQuery from "../hooks/useCustomQuery";
const Login = () => {
    const { response } = useCustomQuery<{ url: string }>(
        "/auth/google",
        {},
        "GET"
    );

    return (
        <div className="w-[300px] bg-app-modal rounded-xl gap-2 flex flex-col items-center shadow-xl shadow-black/40">
            <div className="px-3 py-5 w-full flex flex-col bg-app-dark items-center rounded-t-xl">
                <img src={Logo} width="20%" />
                <h1 className="text-2xl text-center w-full text-white font-extrabold mt-2">
                    Login to Twidge
                </h1>
                <span className="text-white/30 text-center leading-5 text-[12px] font-semibold mt-1">
                    Ready to be a productivity beast?
                </span>
            </div>
            <div className="w-full flex flex-col items-center h-full gap-2 py-2">
                <a
                    href={response?.url}
                    target={"_blank"}
                    className="bg-app-dark/70 text-white/50 font-semibold text-[12px] py-2 rounded-xl px-[62px] flex gap-2 items-center"
                    rel="noreferrer"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.3041 6.76938C14.3861 7.20871 14.4307 7.66805 14.4307 8.14738C14.4307 11.8967 11.9214 14.5627 8.13139 14.5627C7.2695 14.563 6.416 14.3934 5.61966 14.0637C4.82332 13.734 4.09975 13.2506 3.4903 12.6411C2.88085 12.0317 2.39746 11.3081 2.06774 10.5118C1.73803 9.71544 1.56846 8.86194 1.56873 8.00005C1.56846 7.13815 1.73803 6.28465 2.06774 5.48831C2.39746 4.69197 2.88085 3.96841 3.4903 3.35895C4.09975 2.7495 4.82332 2.26611 5.61966 1.9364C6.416 1.60668 7.2695 1.43712 8.13139 1.43738C9.90339 1.43738 11.3841 2.08938 12.5201 3.14805L10.6701 4.99805V4.99338C9.98139 4.33738 9.10739 4.00071 8.13139 4.00071C5.96606 4.00071 4.20606 5.83005 4.20606 7.99605C4.20606 10.1614 5.96606 11.9947 8.13139 11.9947C10.0961 11.9947 11.4334 10.8714 11.7081 9.32871H8.13139V6.76938H14.3047H14.3041Z"
                            fill="white"
                        />
                    </svg>
                    Continue with Google
                </a>
                <span className="text-white/30 text-center leading-5 text-[8px] font-semibold">
                    By logging in you agree to our{" "}
                    <a href="#" className="text-white/50 font-semibold">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-white/50 font-semibold">
                        Privacy Policy
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Login;
