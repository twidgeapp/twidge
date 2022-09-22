import SpaceSidebarHeader from "./header";
import WhiteBoard from "./whiteboard";

const SpaceSidebar = () => {
    return (
        <div className="w-64 min-w-[16rem] bg-dark-gray1 border-r border-r-dark-gray4 mt-10">
            <SpaceSidebarHeader />
            <div className="mt-3 flex flex-col gap-4">
                <WhiteBoard />
            </div>
        </div>
    );
};

export default SpaceSidebar;
