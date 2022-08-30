import { appWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import LinuxMenuBar from "../components/menu-bar/linux";

const Home = () => {
  const [rounded, setRounded] = useState("md");

  useEffect(() => {
    appWindow.isMaximized().then((vl) => {
      setRounded(vl ? "none" : "md");
    });
  }, []);

  return (
    <div className="bg-black bg-opacity-90 w-screen h-screen rounded-md">
      <LinuxMenuBar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        Twidge
      </div>
    </div>
  );
};

export default Home;
