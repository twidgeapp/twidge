import Spaces from "@twidge/utils/state/spaces";
import { observer } from "mobx-react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Header from "./header";

interface Props {
    spaceStore: Spaces;
}

const ProjectSidebar = observer((props: Props) => {
    const { id } = useParams();

    const space = useMemo(() => {
        let project = props.spaceStore.spaces.find((space) => space.id.toString() === id);
        return project;
    }, [id, props.spaceStore])

    return (
        <div className="w-64 h-full border-r border-r-text/10">
            <Header space={space!} />
        </div>
    )
})

export default ProjectSidebar;