import Sidebar from "@twidge/components/sidebar";
import InfiniteViewer from "react-infinite-viewer";
import SpaceContextMenu from "../../components/context-menu/space";
import { ContextMenu, ContextMenuTrigger } from "../../components/context-menu"

const Space = () => {
  return (
    <>
      <ContextMenu>
        <Sidebar />
        <div style={{width: '100%', height: '100%'}}>
        <ContextMenuTrigger>
          <InfiniteViewer usePinch={true} useWheelScroll={true} useMouseDrag={true} useAutoZoom={true} className="viewer">
              <h1>AforApple</h1>
          </InfiniteViewer>
        </ContextMenuTrigger>
        <SpaceContextMenu />
          </div>
      </ContextMenu>
    </>
  );
};

export default Space;
