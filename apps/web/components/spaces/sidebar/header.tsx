import { Space } from '@twidge/utils/state/spaces';
import { observer } from 'mobx-react';
import * as Icons from '@tabler/icons';

interface Props {
    space: Space;
}

const Header = (props: Props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Icon = Icons[props.space.icon];

    return (
        <div className="w-full h-12 border-b border-b-text/10 flex items-center px-4 gap-2">
            <Icon size={20} color={`#${props.space.colors.iconColor}`} />
            <h1 className="text-sm font-bold">{props.space.name}</h1>
        </div>
    );
};

export default observer(Header);
