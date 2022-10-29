import Spaces from "@twidge/utils/state/spaces";
import { observer } from "mobx-react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import ProjectSidebarItems from "./items";

interface Props {
    spaceStore: Spaces;
}

const ProjectSidebar = observer((props: Props) => {
    const { id } = useParams();

    const space = useMemo(() => {
        const project = props.spaceStore.spaces.find(
            (space) => space.id.toString() === id
        );
        return project;
    }, [id, props.spaceStore]);

    if (space) {
        return (
            <div className="w-64 h-full border-r border-r-text/10">
                <Header space={space!} />
                <ProjectSidebarItems />
            </div>
        );
    } else {
        return <></>;
    }
});

export default ProjectSidebar;
