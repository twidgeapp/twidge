import { useSelector } from "@twidge/core/state";
import { Spaces } from "@twidge/utils/bindings";
import { useMemo } from "react";
import { useParams } from "react-router";
import SpaceContext from "../../../components/spaces/ctx";
import SpaceSidebar from "../../../components/spaces/sidebar";
import Layout from "../../../layouts";
import "draft-js/dist/Draft.css";
import EditorPage from "../../../components/spaces/editor";
import "./notes.css";

const NotesHome = () => {
    const params: any = useParams();
    const spaces = useSelector((state: any) => state.spaces.spaces);
    const platform = useSelector((state: any) => state.global.platform);

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
                <div
                    className={`w-full overflow-hidden ${platform === "win32"
                        ? "h-[calc(100vh-40px)] mt-[40px]"
                        : "h-full"
                        }`}
                >
                    <EditorPage />
                </div>
            </Layout>
        </SpaceContext.Provider>
    );
};

export default NotesHome;
