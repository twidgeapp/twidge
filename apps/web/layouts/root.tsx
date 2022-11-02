import React, { useContext, useEffect } from 'react';
import { trpc } from '../utils/trpc';
import StateContext from '@twidge/utils/state';
import SpaceSidebar from '../components/spaces/sidebar';
import Sidebar from '../components/sidebar';

interface Props {
    children: React.ReactNode;
    isSpacePage: boolean;
}

const RootLayout = (props: Props) => {
    const { data } = trpc.spaces.get.useQuery(undefined, { suspense: true });
    const { spaces } = useContext(StateContext);
    const { data: userData } = trpc.user.get.useQuery(undefined, {
        suspense: true,
    });

    useEffect(() => {
        if (data) {
            spaces.setSpaces(data);
        }
    }, [data]);

    return (
        <div className="w-screen h-screen flex">
            <Sidebar spaceStore={spaces} />
            {props.isSpacePage && <SpaceSidebar />}
            {props.children}
        </div>
    );
};

export default RootLayout;
