import { useContext, useEffect } from 'react';
import { trpc } from '../utils/trpc';
import StateContext from '@twidge/utils/state';
import Sidebar from '../components/sidebar';
import SpaceSidebar from '../components/spaces/space-sidebar';

interface Props {
    children: React.ReactNode;
}

const SpaceLayout = (props: Props) => {
    const { data } = trpc.spaces.get.useQuery(undefined, { suspense: true });
    const { spaces } = useContext(StateContext);

    useEffect(() => {
        if (data) {
            spaces.setSpaces(data);
        }
    }, [data]);

    return (
        <div className="w-screen h-screen flex">
            <Sidebar spaceStore={spaces} />
            <SpaceSidebar />
            {props.children}
        </div>
    );
};

export default SpaceLayout;
