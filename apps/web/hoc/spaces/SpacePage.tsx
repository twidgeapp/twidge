import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import Favicon from '../../components/favicon';
import SpaceContext from '../../utils/ctx/space';
import PrivateLayout from '../../layouts/private';

const makeFirstCharUppercase = (str?: string) => {
    if (str === undefined) return undefined;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const SpacePage = () => {
    const { space: currentSpace } = useContext(SpaceContext);

    useEffect(() => {
        console.log(currentSpace);
        if (!currentSpace) return;
        const colors = currentSpace?.colors as any;
        document.body.style.setProperty('--primary', colors.primaryColor);
        document.body.style.setProperty('--accent', colors.accentColor);

        return () => {
            document.body.style.setProperty('--primary', '214');
            document.body.style.setProperty('--accent', '214');
        };
    }, [currentSpace]);

    return (
        <PrivateLayout isSpacePage={true} fallback={<h1>Loading</h1>}>
            <Head>
                <title key={'title'}>
                    {currentSpace?.name
                        ? `${makeFirstCharUppercase(currentSpace?.name)} - `
                        : ''}{' '}
                    Twidge
                </title>
            </Head>
            <Favicon space={currentSpace} />
        </PrivateLayout>
    );
};

export default SpacePage;
