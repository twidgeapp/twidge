import Logo from "../assets/logo.svg";
import { useEffect } from "react";
import { useDispatch } from "@twidge/core/state";
import rspc from "@twidge/core/query";
import { invoke } from "@tauri-apps/api";
import { useNavigate } from "@twidge/core/router";
import { setLoaded, setVersion } from "@twidge/core/state/global";

const Home = () => {
    const versionData = rspc.useQuery(["version"]);
    const migrator = rspc.useQuery(["db.migrate_and_populate"]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(versionData.data);
        if (versionData.data && !migrator.isLoading) {
            dispatch(setLoaded(true));
            dispatch(setVersion(versionData.data));
            invoke("show_bar");
            navigate("/home");
        }
    }, [versionData.data, migrator.isLoading]);

    return (
        <div className="rounded-md w-screen h-screen bg-dark-gray2 bg-opacity-90">
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
