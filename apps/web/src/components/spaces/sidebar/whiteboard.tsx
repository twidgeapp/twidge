import { Whiteboard20Filled } from "@fluentui/react-icons";
import { useNavigate } from "@twidge/core/router";
import SpaceContext from "../ctx";
import { useContext } from "react";

const WhiteBoard = () => {
    const navigate = useNavigate();
    const spaceContext = useContext(SpaceContext);

    return (
        <div
            onClick={() => {
                navigate(`/spaces/${spaceContext.spaceInfo!.id}/whiteboard`);
            }}
            className="flex gap-2 items-center px-4 py-2 hover:bg-dark-gray3 rounded-xl transition-all duration-150 mx-2"
        >
            <Whiteboard20Filled />
            <div className="flex flex-col gap-1">
                <div className="text-white text-sm font-normal">Whiteboard</div>
            </div>
        </div>
    );
};

export default WhiteBoard;
