import BottomRightLogo from "../../components/onboarding/logo";
import NextButton from "../../components/onboarding/buttons";
import OnBoardingLayout from "../../layout/onboarding_layout";
import LinkCards from "../../components/onboarding/link_card";

const OnBoardingPage5 = () => {
    return (
        <OnBoardingLayout page="5">
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-4xl font-extrabold">You are good to go!</h1>
                <p className="text-center opacity-60">
                    Before you leave, here are a few links. Make sure to
                    <br />
                    bookmark them! They might come handy later.
                </p>
                <LinkCards />
            </div>
            <BottomRightLogo />
            <NextButton page="1" back={true} />
        </OnBoardingLayout>
    );
};

export default OnBoardingPage5;
