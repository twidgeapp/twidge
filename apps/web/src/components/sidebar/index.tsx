import { useSelector } from "@twidge/core/state";
import Image from "../../assets/logo.svg";
import { Link } from "@twidge/core/router";
import Element from "./element";
import { Add20Filled, Document16Filled } from "@fluentui/react-icons";
import rspc from "@twidge/core/query";
import * as Icons from "@fluentui/react-icons";

const LineBreak = () => (
    <div className="border-b w-3/5 h-1 border-dark-gray11"></div>
);

const Sidebar = () => {
    const platform = useSelector((state: any) => state.global.platform);
    const { mutate } = rspc.useMutation("spaces.create");
    const { refetch, data } = rspc.useQuery(["spaces.get"]);

    return (
        <div className="no-scrollbar w-14">
            <div
                className="w-full h-full overflow-y-auto bg-dark-gray1 py-3"
                style={{
                    borderTopLeftRadius: platform === "win32" ? "12px" : "",
                    borderBottomLeftRadius: platform === "win32" ? "12px" : "",
                }}
            >
                <div className="h-fit w-full flex items-center flex-col gap-2 pb-12">
                    <Link to="/home">
                        <img className="w-6 h-6 select-none" src={Image} />
                    </Link>
                    <Element
                        color="#9E9E9E"
                        onClick={() => {
                            mutate(undefined, {
                                onSuccess() {
                                    refetch();
                                },
                            });
                        }}
                        icon={<Add20Filled />}
                    />
                    <LineBreak />
                    {data?.map((space) => (
                        <Element
                            color={space.color}
                            icon={<Document16Filled />}
                            onClick={() => {
                                console.log("clicked");
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
