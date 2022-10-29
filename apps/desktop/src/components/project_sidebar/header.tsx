import { Space } from "../../bindings";
import * as Icons from "@tabler/icons";

interface Props {
    space: Space;
}

const Header = (props: Props) => {
    // @ts-ignore
    const Icon: Icons.TablerIcon = Icons[props.space.icon];

    return (
        <div className="w-full h-12 flex items-center px-4 border-b border-b-text/10">
            <Icon color={props.space.color} />
            <h1 className="text-sm font-bold ml-2 text-text-light">{props.space.name}</h1>
        </div>
    );
};

export default Header;
