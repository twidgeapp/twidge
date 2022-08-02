import Logo from "../components/logo";
import { styled } from "@twidge/config/stitches.config";
import { useEffect } from "react";
import useTauriHandler from "@twidge/utils/hooks/useTauriHandler";
import Spaces from "@twidge/utils/types/spaces";
import useSpaceStore from "@twidge/utils/state/spaces";
import { useNavigate } from "react-router-dom";

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
  const {send, result} = useTauriHandler({name: "run_db_migrator"});
  
  const navigate = useNavigate();
  const { send: getSend, result: getResult } = useTauriHandler<Spaces>({ name: "get_spaces" });
  const spaces = useSpaceStore((space) => space.spaces);
  const overwriteSpaces = useSpaceStore((space) => space.overwriteSpaces);

  useEffect(() => {
    if (spaces){ 
      // if there are no spaces move them to /home where they can create a new get_spaces
      if (spaces.length === 0){
        navigate('/home') 
      }else{
        // else move them to the first space
        navigate(`/spaces/${spaces[0].id}`)  
      }
    }
    console.log("spaces", spaces);
  }, [spaces]);

  useEffect(() => {
    console.log(getResult)
    overwriteSpaces(getResult as any);
  }, [getResult]);

  useEffect(()=>{
    send() 
  }, [])
  
  useEffect(()=>{
    if (result){
      getSend() 
    } 
  }, [result])

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
