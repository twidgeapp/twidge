import Sidebar from "@twidge/components/sidebar";
import InfiniteViewer from "react-infinite-viewer";


const Space = () => {
  return (
    <>
      <Sidebar />
      <InfiniteViewer usePinch={true} useWheelScroll={true} useMouseDrag={true} useAutoZoom={true} className="viewer">
          <h1>AforApple</h1>
      </InfiniteViewer>
    </>
  );
};

export default Space;
