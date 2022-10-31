import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import PrivateLayout from '../../layouts/private';
import Favicon from '../../components/favicon';
import SpaceContext from '../../utils/ctx/space';

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
        </PrivateLayout>
    );
};

export default SpacePage;
