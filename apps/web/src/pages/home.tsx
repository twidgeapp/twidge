import Sidebar from "@twidge/components/sidebar";
import { styled } from "@twidge/config/stitches.config";
import useTauriHandler from "@twidge/utils/hooks/useTauriHandler";
import useSpaceStore from "@twidge/utils/state/spaces";
import { Space } from "@twidge/utils/types/spaces";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo";

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
    button: {
      all: "unset",
      padding: "8px 12px",
      marginTop: "8px",
      borderRadius: "12px",
      border: "1px solid $borderColor",
      transition: "0.15s all ease-in-out",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "$borderColor",
      },
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

/// this page would be shown when there are no spaces
const NAHome = () => {
  const { send, result } = useTauriHandler<Space>({ name: "create_space" });
  const addSpaces = useSpaceStore((space) => space.addSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (result) {
      addSpaces(result);
      navigate(`/spaces/${result.id}`);
    }
  }, [result]);

  return (
    <>
      <Sidebar />
      <Root>
        <div className="main">
          <Logo />
          <h1>You currently have no spaces!</h1>
          <button onClick={send}>Create new space</button>
        </div>
        <p className="work">Create a space to get started!</p>
      </Root>
    </>
  );
};

export default NAHome;
