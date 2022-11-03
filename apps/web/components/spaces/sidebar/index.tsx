import useCurrentSpace from '../../../hooks/useCurrentSpace';
import Header from './header';
import * as Icons from '@tabler/icons';
import Link from 'next/link';

const SpaceSidebar = () => {
    const space = useCurrentSpace();

    if (!space) return <></>;

    return (
        <div className="w-64 bg-app-sidebar-background border-r border-r-text/10">
            <Header space={space} />
            <div className="mt-2 px-2">
                {space.whiteboards.map((whiteboard, idx) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const Icon: Icons.TablerIcon = Icons[whiteboard.icon];

                    return (
                        <Link
                            href={`/spaces/${space.id}/whiteboard/${whiteboard.id}`}
                            className="flex gap-2 rounded-lg px-2 py-1 hover:bg-app-background text-sm items-center transition-all duration-150"
                            key={idx}
                        >
                            <Icon size={'16'} />
                            {whiteboard.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SpaceSidebar;
