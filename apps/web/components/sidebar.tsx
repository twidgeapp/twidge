import { observer } from 'mobx-react';
import Spaces from '@twidge/utils/state/spaces';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '@tabler/icons';
import Dialog from '@twidge/components/modals';
import NewProject from './modals/new-project';
import { useRouter } from 'next/router';

interface Props {
    spaceStore: Spaces;
}

const Separator = () => <div className="w-3/4 border-t border-t-text/10 h-1" />;

const Sidebar = (props: Props) => {
    const { spaceStore } = props;
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="flex flex-col min-w-[56px] max-w-[56px] w-14 h-full bg-app-sidebar-background items-center py-3 gap-2">
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
            {spaceStore.spaces.map((space) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const Icon: Icons.TablerIcon = Icons[space.icon];

                return (
                    <Link key={space.id} href={`/spaces/${space.id}`}>
                        <button
                            className={`p-2 hover:bg-app-background rounded-lg transition-all duration-100 border border-text/10 ${
                                id == space.id && 'bg-text/10'
                            }`}
                        >
                            <Icon size={16} />
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export default observer(Sidebar);
