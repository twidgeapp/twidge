import Logo from "../components/logo";
import { styled } from "@twidge/config/stitches.config";
import { useEffect, useState } from "react";
import Bg1 from "../assets/index/bg-1.png";
import Bg2 from "../assets/index/bg-2.png";
import Bg3 from "../assets/index/bg-3.png";
import { invoke } from "@tauri-apps/api";
import useSpaceStore from "@twidge/utils/state/spaces";
import { useNavigate } from "react-router-dom";
import Spaces from "@twidge/utils/types/spaces";
import { motion } from "framer-motion";

const Root = styled(motion.div, {
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
    zIndex: "100",

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

const Image = styled("img", {
  position: "fixed",
  pointerEvents: "none",
  zIndex: "0",
});

const Home = () => {
  const [status, setStatus] = useState("Loading...");
  const overWriteSpaces = useSpaceStore((state) => state.overwriteSpaces);
  const spaces = useSpaceStore((state) => state.spaces);
  const navigate = useNavigate();

  useEffect(() => {
    if (spaces) {
      if (spaces.length === 0) {
        navigate("/home");
      } else {
        navigate(`/spaces/${spaces[0].id}`);
      }
    }
  }, [spaces]);

  useEffect(() => {
    setStatus("Migrations.");

    invoke("run_db_migrator").then(() => {
      setStatus("Getting Spaces");

      invoke("get_spaces").then((res: any) => {
        let result: Spaces = JSON.parse(res);
        overWriteSpaces(result);
      });
    });
  }, []);

  return (
    <Root
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={Bg1} css={{ width: "75%", top: 0, right: 0 }} />
      <Image src={Bg2} css={{ width: "75%", top: "-25%", left: 0 }} />
      <Image src={Bg3} css={{ width: "75%", bottom: 0, right: "150px" }} />
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="main"
      >
        <Logo />
        <h1>Welcome to Twidge!</h1>
        <p>The radically new way to organize your life.</p>
      </motion.div>
      <p className="work">{status}</p>
    </Root>
  );
};

export default Home;
