import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import Favicon from '../components/favicon';
import SpaceContext from '../utils/ctx/space';
import PrivateLayout from './private';

const makeFirstCharUppercase = (str?: string) => {
    if (str === undefined) return undefined;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

interface Props {
    children: React.ReactNode;
    title?: string;
    icon?: string;
}

const SpaceLayout = (props: Props) => {
    const { space: currentSpace } = useContext(SpaceContext);

    useEffect(() => {
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
                {props.title ? (
                    <title key={'title'}>{props.title}</title>
                ) : (
                    <title key={'title'}>
                        {currentSpace?.name
                            ? `${makeFirstCharUppercase(currentSpace?.name)} - `
                            : ''}{' '}
                        Twidge
                    </title>
                )}
            </Head>
            <Favicon space={currentSpace} icon={props.icon} />
            {props.children}
        </PrivateLayout>
    );
};

export default SpaceLayout;
