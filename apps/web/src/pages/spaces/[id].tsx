import { useSelector } from "@twidge/core/state";
import { Spaces } from "@twidge/utils/bindings";
import { useMemo } from "react";
import { useParams } from "react-router";
import SpaceContext from "../../components/spaces/ctx";
import SpaceSidebar from "../../components/spaces/sidebar";
import Layout from "../../layouts";

const SpaceHome = () => {
    const params: any = useParams();
    const spaces = useSelector((state: any) => state.spaces.spaces);

    const spaceInfo = useMemo(() => {
        if (!spaces) return null;
        const id = params.id;
        const space = spaces as Spaces[];
        const spaceInfo = space.find((e) => e.id === parseInt(id!));
        return spaceInfo;
    }, [params, spaces]);

    return (
        <SpaceContext.Provider value={{ spaceInfo: spaceInfo }}>
            <Layout>
                <SpaceSidebar />
            </Layout>
        </SpaceContext.Provider>
    );
};

export default SpaceHome;
