import NavigatorIcons from "../components/onboarding/navigator_icons";

const OnBoardingLayout = (props: any) => {
  return (
    <div
      className={
        "bg-dark-gray2 bg-opacity-90 w-full h-full flex items-center justify-center text-white selection:bg-dark-blue11 selection:bg-opacity-50"
      }
    >
      {props.children}
      <div className="absolute bottom-6 left-6">
        <NavigatorIcons page={props.page} />
      </div>
    </div>
  );
};

export default OnBoardingLayout;
