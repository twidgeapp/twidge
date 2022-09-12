import Card from "../../components/onboarding/card";
import BottomRightLogo from "../../components/onboarding/logo";
import NextButton from "../../components/onboarding/buttons";
import OnBoardingLayout from "../../layout/onboarding_layout";

const OnBoardingPage3 = () => {
    return (
        <OnBoardingLayout page="3">
            <div className="flex items-center justify-center flex-col gap-2">
                <h1 className="text-4xl font-extrabold">
                    This is the <i className="font-black">fastest</i> it gets.
                </h1>
                <p className="text-center font-semibold text-base opacity-60">
                    We are on our way to help you be your best productive self.
                    Here are a few <br />
                    ways by which we achieve this.
                </p>
                <div className="flex items-start gap-24 mt-6">
                    <Card
                        keyb="V"
                        description="Just open twidge and paste in anything you want, twidge infers the type and it inserts it into the specific space. It’s so easy its like magic."
                    />
                    <Card
                        keyb="K"
                        description="Twidge has an inbuilt global menu just like MacOS spotlight, just ⌘ + K and enter in anything you want to insert so that you never loose your flow. It’s so easy its like blackmagic. "
                    />
                </div>
            </div>
            <BottomRightLogo />
            <NextButton page="4" />
        </OnBoardingLayout>
    );
};

export default OnBoardingPage3;
