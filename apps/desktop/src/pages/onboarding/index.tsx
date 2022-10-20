import styled from "@twidge/config/stitches.config";
import Logo from "../../assets/logo.svg";
import Button from "@twidge/components/buttons";

const Root = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  justifyContent: "center",

  userSelect: "none",
});

const Header = styled("h1", {
  fontSize: "28px",
  fontWeight: "900",
  color: "$mauve11",
  margin: "0",
});

const Span = styled("span", {
  fontSize: "14px",
  color: "$mauve11",
  margin: "0",
  textAlign: "center",
  lineHeight: "1.5",
  width: "100%",
  display: "block",
  fontWeight: "700",

  marginTop: "12px",
});

const Buttons = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  marginTop: "12px",
});

const OnboardingHomePage = () => {
  return (
    <Root>
      <img src={Logo} alt="Logo" />
      <Header>Welcome to Twidge.</Header>
      <Span>
        Meet the new standard for organizing your life plan your calendars,
        <br />
        write notes, build to-do lists blazingly fast
      </Span>

      <Buttons>
        <Button
          css={{
            backgroundColor: "$pink5",
            color: "$pink10",
            border: "1px solid $pink10",
            width: "75px",
          }}
        >
          Next
        </Button>
        <Button
          css={{
            backgroundColor: "$mauve5",
            color: "$mauve10",
            border: "1px solid $mauve10",
            width: "75px",
          }}
        >
          Skip
        </Button>
      </Buttons>
    </Root>
  );
};

export default OnboardingHomePage;
