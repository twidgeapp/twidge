import { IconArtboard } from "@tabler/icons"
import { Link, useParams } from "react-router-dom";

const ProjectSidebarItems = () => {
    const { id } = useParams();

    return (
        <div className="w-full h-[calc(100%-48px)] flex items-center flex-col gap-2 py-4 px-4">
            <Link to={`/space/${id}`} className="w-full h-8 hover:bg-sidebar-item rounded-md flex gap-2 items-center px-2 text-text transition-all duration-150">
                <IconArtboard size={"20"} />
                <h1 className="text-sm font-bold">Whiteboard</h1>
            </Link>
        </div>
    )
}

export default ProjectSidebarItems;