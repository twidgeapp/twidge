import StateContext from '@twidge/utils/state';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import PrivateLayout from '../../layouts/private';
import { trpc } from '../../utils/trpc';
import Favicon from '../../components/favicon';
import { Spaces } from '@prisma/client';

const makeFirstCharUppercase = (str?: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function IndexPage() {
    const { data } = trpc.user.get.useQuery();
    // get the id
    const router = useRouter();
    const { id } = router.query;
    const { spaces } = useContext(StateContext);
    const [currentSpace, setCurrentSpace] = React.useState<
        Spaces | undefined
    >();

    useEffect(() => {
        setCurrentSpace(spaces.spaces.find((space) => space.id === id));
    }, [id, spaces]);

    useEffect(() => {
        const space = currentSpace;
        if (!space) return;
        const colors = space?.colors as any;
        document.body.style.setProperty('--primary', colors.primaryColor);
        document.body.style.setProperty('--accent', colors.accentColor);

        return () => {
            document.body.style.setProperty('--primary', '214');
            document.body.style.setProperty('--accent', '214');
        };
    }, [currentSpace]);

    return (
        <PrivateLayout fallback={<div>asd</div>}>
            <Head>
                <title key={'title'}>
                    {currentSpace?.name
                        ? `${makeFirstCharUppercase(currentSpace?.name)} - `
                        : ''}{' '}
                    Twidge
                </title>
            </Head>
            <Favicon space={currentSpace} />
            <div>{JSON.stringify(data)}</div>
        </PrivateLayout>
    );
}
