import BottomRightLogo from "../../components/onboarding/logo";
import NextButton from "../../components/onboarding/buttons";
import OnBoardingLayout from "../../layouts/onboarding_layout";
import Elements from "../../assets/elements.svg";

const OnBoardingPage3 = () => {
  return (
    <OnBoardingLayout page="3">
      <div className="flex items-center justify-center flex-col gap-2">
        <img
          width={"50%"}
          className="absolute top-0 right-0 select-none"
          src={Elements}
        />
        <h1 className="text-4xl font-extrabold">Elements</h1>
        <p className="text-center text-[15px] opacity-60 pt-5">
          Elements are the building blocks of Twidge. You can insert an element
          either by using the
          <br /> user-interface, or by pasting something into the app. You can
          also use the global
          <br />
          command handler to insert elements. Elements can be text, code, files,
          todo-lists and more
        </p>
      </div>
      <BottomRightLogo />
      <NextButton page="4" />
    </OnBoardingLayout>
  );
};

export default OnBoardingPage3;
