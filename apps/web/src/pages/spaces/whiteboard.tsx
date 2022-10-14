import { useSelector } from "@twidge/core/state";
import { Spaces } from "@twidge/utils/bindings";
import InfiniteViewer from "react-infinite-viewer";
import React, { useMemo } from "react";
import { useParams } from "react-router";
import SpaceContext from "../../components/spaces/ctx";
import SpaceSidebar from "../../components/spaces/sidebar";
import Layout from "../../layouts";
import { flushSync } from "react-dom";
import useClipSense from "../../utils/clipsense";
import rspc from "@twidge/core/query";
import Moveable from "react-moveable";
import "../../whiteboard.css";
import WhiteboardItemElement, {
    checkIfMedia,
} from "../../components/spaces/whiteboard";

const WhiteboardPage = () => {
    const params: any = useParams();

    const spaces = useSelector((state: any) => state.spaces.spaces);

    const moveMutation = rspc.useMutation("whiteboard.items.move");
    const resizeMutation = rspc.useMutation("whiteboard.items.resize");

    const { data, refetch } = rspc.useQuery([
        "whiteboard.items.get",
        { whiteboard_id: parseInt(params.id!) },
    ]);

    useClipSense({ refetch });

    const spaceInfo = useMemo(() => {
        if (!spaces) return null;
        refetch();
        const id = params.id;
        const space = spaces as Spaces[];
        const spaceInfo = space.find((e) => e.id === parseInt(id!));
        return spaceInfo;
    }, [params, spaces]);

    return (
        <SpaceContext.Provider value={{ spaceInfo: spaceInfo }}>
            <Layout>
                <SpaceSidebar />

                <InfiniteViewer
                    useAutoZoom={true}
                    useMouseDrag={true}
                    usePinch={true}
                    useWheelScroll={true}
                    className="viewer"
                >
                    <div className="viewport selecto-area">
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-ignore*/}
                        {data?.map((e) => (
                            <>
                                <div
                                    style={{
                                        transform: `translate(${e.posX}, ${e.posY})`,
                                        width:
                                            e.width == "auto"
                                                ? undefined
                                                : e.width,
                                        height:
                                            e.height == "auto"
                                                ? undefined
                                                : e.height,
                                    }}
                                    className={`target${e.id} bg-dark-gray4 p-2 rounded-xl border border-gray11 grid place-items-center max-w-fit w-full`}
                                >
                                    <WhiteboardItemElement element={e} />
                                </div>
                                <Moveable
                                    rootContainer={document.body}
                                    className={`moveable`}
                                    target={`.target${e.id}`}
                                    flushSync={flushSync}
                                    draggable={true}
                                    resizable={true}
                                    keepRatio={
                                        checkIfMedia(e.item_type) ? true : false
                                    }
                                    renderDirections={[
                                        "nw",
                                        "ne",
                                        "se",
                                        "sw",
                                        "n",
                                        "s",
                                        "e",
                                        "w",
                                    ]}
                                    snappable={true}
                                    origin={false}
                                    rotateAroundControls={true}
                                    onResizeEnd={(resizeEvent) => {
                                        const { width, height } =
                                            resizeEvent.lastEvent;
                                        resizeMutation.mutate({
                                            id: e.id,
                                            width: width + "px",
                                            height: height + "px",
                                        });
                                        console.log(resizeEvent);
                                    }}
                                    onDragEnd={(target) => {
                                        let { transform } = target.lastEvent;
                                        transform = transform
                                            .replace("translate(", "")
                                            .replace(")", "")
                                            .split(",");
                                        const x = transform[0].trim();
                                        const y = transform[1].trim();
                                        moveMutation.mutate({
                                            id: parseInt(e.id.toString()),
                                            x_pos: x,
                                            y_pos: y,
                                        });
                                    }}
                                    onRender={(e) => {
                                        e.target.style.cssText += e.cssText;
                                    }}
                                />
                            </>
                        ))}
                    </div>
                </InfiniteViewer>
                <div className="empty elements"></div>
            </Layout>
        </SpaceContext.Provider>
    );
};

export default WhiteboardPage;
