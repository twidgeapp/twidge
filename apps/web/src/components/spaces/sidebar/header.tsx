import { useContext } from "react";
import SpaceContext from "../ctx";

const SpaceSidebarHeader = () => {
    const { spaceInfo } = useContext(SpaceContext);

    if (!spaceInfo) return <></>;

    return (
        <div className="w-full h-16 border-b border-b-dark-gray4">
            <div className="w-full h-full flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="text-white font-bold text-lg">
                        {spaceInfo.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaceSidebarHeader;
