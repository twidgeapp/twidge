import { Space as SpaceType } from "../../bindings";
import * as Icons from "@tabler/icons";
import { Link } from "react-router-dom";

interface Props {
    space: SpaceType;
}

const Space = (props: Props) => {
    // @ts-ignore
    const Icon: Icons.TablerIcon = Icons[props.space.icon];

    return (
        <Link
            to={`/space/${props.space.id}`}
            className="border border-text/10 w-9 h-9 rounded-xl cursor-pointer hover:bg-app-bg transition-all duration-150 grid place-items-center"
        >
            <Icon color={props.space.color} size={20} />
        </Link>
    );
};

export default Space;
