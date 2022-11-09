import SpaceSidebarHeader from "./header";
import Notes from "./notes";
import WhiteBoard from "./whiteboard";

const SpaceSidebar = () => {
    return (
        <div className="w-64 min-w-[16rem] h-full bg-dark-gray1 border-r border-r-dark-gray4 overflow-y-auto">
            <SpaceSidebarHeader />
            <div className="mt-3 flex flex-col gap-2">
                <WhiteBoard />
                <Notes />
            </div>
        </div>
    );
};

export default SpaceSidebar;
