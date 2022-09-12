import BottomRightLogo from "../../components/onboarding/logo";
import NextButton from "../../components/onboarding/buttons";
import OnBoardingLayout from "../../layout/onboarding_layout";
import Spaces from "../../assets/spaces.svg";

const OnBoardingPage4 = () => {
    return (
        <OnBoardingLayout page="4">
            <div className="flex items-center justify-center flex-col gap-2">
                <img
                    width={"50%"}
                    className="absolute top-0 right-0 select-none"
                    src={Spaces}
                />

                <h1 className="text-4xl font-extrabold">Spaces</h1>
                <p className="text-center text-[15px] opacity-60 pt-5">
                    Spaces are used to organize your elements into different
                    groups. You can create a<br /> space by clicking on the plus
                    icon in the sidebar. You can also create a space
                    <br /> by using the global command handler.
                </p>
            </div>
            <BottomRightLogo />
            <NextButton page="5" />
        </OnBoardingLayout>
    );
};

export default OnBoardingPage4;
