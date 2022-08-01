import Logo from "../components/logo";
import { styled } from "@twidge/config/stitches.config";

const Root = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  userSelect: "none",
  ".main": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    h1: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "44px",
      color: "#FFFFFF",
    },
    p: {
      fontSize: "14px",
      lineHeight: "17px",
      color: "rgba(255, 255, 255, 0.6)",
      marginTop: "6px",
      fontWeight: 700,
    },
  },
  ".work": {
    fontSize: "12px",
    lineHeight: "17px",
    color: "rgba(255, 255, 255, 0.6)",
    position: "fixed",
    bottom: 0,
    right: 0,
    marginTop: "6px",
    fontWeight: 700,
  },
});

const Home = () => {
  return (
    <Root>
      <div className="main">
        <Logo />
        <h1>Welcome to Twidge!</h1>
        <p>The radically new way to organize your life.</p>
      </div>
      <p className="work">Open a space to get started</p>
    </Root>
  );
};

export default Home;
