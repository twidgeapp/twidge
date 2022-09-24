import {useSelector} from "@twidge/core/state";
import {Spaces} from "@twidge/utils/bindings";
import InfiniteViewer from "react-infinite-viewer";
import React, {useMemo} from "react";
import {useParams} from "react-router";
import SpaceContext from "../../components/spaces/ctx";
import SpaceSidebar from "../../components/spaces/sidebar";
import Layout from "../../layouts";
import {flushSync} from "react-dom";
import useClipSense from "../../utils/clipsense";
import rspc from "@twidge/core/query";
import Moveable from "react-moveable";

const WhiteboardPage = () => {
    const params = useParams();
    const spaces = useSelector((state: any) => state.spaces.spaces);
    const {data, error, refetch} = rspc.useQuery(["whiteboard.items.get", {whiteboard_id: parseInt(params.id!)}]);
    useClipSense();

    const spaceInfo = useMemo(() => {
        if (!spaces) return null;
        refetch();
        const id = params.id;
        const space = spaces as Spaces[];
        const spaceInfo = space.find((e) => e.id === parseInt(id!));
        return spaceInfo;
    }, [params, spaces]);

    return (
        <SpaceContext.Provider value={{spaceInfo: spaceInfo}}>
            <Layout>
                <SpaceSidebar/>

                <InfiniteViewer
                    useAutoZoom={true}
                    useMouseDrag={true}
                    usePinch={true}
                    useWheelScroll={true}
                    className="viewer"
                >
                    <div className="viewport selecto-area">
                        <div className="target">asd</div>
                        <Moveable
                            target=".target"
                            flushSync={flushSync}
                            draggable={true}
                            resizable={true}
                            renderDirections={["nw", "ne", "se", "sw"]}
                            snappable={true}
                            origin={false}
                            rotationPosition={"none"}
                            rotateAroundControls={true}
                            onRender={(e) => {
                                e.target.style.cssText += e.cssText;
                            }}
                        />
                    </div>
                </InfiniteViewer>
                <div className="empty elements">
                </div>
            </Layout>
        </SpaceContext.Provider>
    );
};

export default WhiteboardPage;
