import styled, { keyframes } from "@twidge/config/stitches.config";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import rspc from "../query";

const Root = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  justifyContent: "center",
});

const shimmer = keyframes({
  "100%": { transform: "translateX(0%)", opacity: 0 },
});

const LoadingBar = styled("div", {
  position: "relative",
  overflow: "hidden",
  backgroundColor: "$pink10",
  borderRadius: "2px",

  "&::after": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: "translateX(-100%)",
    backgroundImage:
      "linear-gradient(90deg,rgba(0, 0, 0, 1) 0,rgba(0, 0, 0, 0.6) 50%,rgba(0, 0, 0, 0.3) 100%)",
    animation: `${shimmer} 2s ease-out infinite`,
    content: "",
  },
});

const LoadingPage = () => {
  const { data, isLoading } = rspc.useQuery(["misc.run_migrations"]);

  useEffect(() => {}, [isLoading]);

  if (!isLoading) {
    return <Navigate to="/onboarding" />;
  }

  return (
    <Root>
      <img src={Logo} alt="" />
      <LoadingBar style={{ width: "200px", height: "5px" }}></LoadingBar>
    </Root>
  );
};

export default LoadingPage;
