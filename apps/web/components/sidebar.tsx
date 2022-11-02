import { observer } from 'mobx-react';
import Spaces from '@twidge/utils/state/spaces';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '@tabler/icons';
import Dialog from '@twidge/components/modals';
import NewProject from './modals/new-project';
import { useRouter } from 'next/router';
import SpaceContext from '../utils/ctx/space';
import useCurrentSpace from '../hooks/useCurrentSpace';

interface Props {
    spaceStore: Spaces;
}

const Separator = () => <div className="w-3/4 border-b border-b-text/10 h-1" />;

const Sidebar = (props: Props) => {
    const { spaceStore } = props;
    const router = useRouter();
    const { id } = router.query;
    const currentSpace = useCurrentSpace();

    return (
        <SpaceContext.Provider value={{ space: currentSpace }}>
            <div className="flex flex-col min-w-[56px] max-w-[56px] w-14 h-full bg-app-sidebar-background items-center py-3 gap-2 border-r border-r-text/10">
                <Link href="/">
                    <Image src="/logo.svg" width={34} height={23} alt="Logo" />
                </Link>
                <Dialog title="Create a new Space">
                    <button className="p-1 mt-1 hover:bg-app-background rounded-lg transition-all duration-100">
                        <Icons.IconPlus />
                    </button>
                    <NewProject />
                </Dialog>
                <Separator />
                {spaceStore.spaces.map((space, idx) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const Icon: Icons.TablerIcon = Icons[space.icon];

                    return (
                        <Link key={idx} href={`/spaces/${space.id}`}>
                            <div
                                className={`p-2 hover:bg-app-background rounded-lg transition-all duration-100 border border-text/10 ${
                                    id == space.id && 'bg-text/10'
                                }`}
                            >
                                <Icon size={16} />
                            </div>
                        </Link>
                    );
                })}
                <Separator />
                <Link
                    href="/settings"
                    className="p-1 hover:bg-app-background rounded-lg transition-all duration-100 text-text/50"
                >
                    <Icons.IconSettings />
                </Link>
            </div>
        </SpaceContext.Provider>
    );
};

export default observer(Sidebar);
