import Logo from "../assets/logo.svg";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "@twidge/core/state";
import rspc from "@twidge/core/query";
import { invoke } from "@tauri-apps/api";
import { useNavigate } from "react-router";
import { setLoaded, setPlatform, setVersion } from "@twidge/core/state/global";
import { platform } from "@tauri-apps/api/os";

const Home = () => {
  const loaded = useSelector((state: any) => state.global.loaded);
  const versionData = rspc.useQuery(["version"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (versionData.data) {
      dispatch(setLoaded(true));
      dispatch(setVersion(versionData.data));
      invoke("run_migrations").then(() => {
        platform().then((e) => {
          dispatch(setPlatform(e));
          invoke("show_bar");
          // navigate("/home");
        });
      });
    }
  }, [versionData.data]);

  return (
    <div className="rounded-md w-screen h-screen bg-black bg-opacity-90">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src={Logo} alt="logo" />
        <div className="relative w-full sm:w-1/6 bg-gray-200 mt-4 rounded">
          <div
            style={{ width: "100%" }}
            className="absolute top-0 h-1 rounded progress-css"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
