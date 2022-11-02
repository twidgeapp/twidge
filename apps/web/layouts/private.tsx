import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import useUser from '../hooks/useUser';
import RootLayout from './root';

interface Props {
    fallback: React.ReactNode;
    children: React.ReactNode;
    isSpacePage: boolean;
}

const PrivateLayout = (props: Props) => {
    const { status } = useSession();
    useUser();

    if (status === 'unauthenticated') {
        signIn();
        return <div>Redirecting...</div>;
    }

    if (status == 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-screen h-screen bg-app-background text-text-light font-inter selection:bg-buttons-background">
            <React.Suspense fallback={<h1>Loading</h1>}>
                <RootLayout isSpacePage={props.isSpacePage}>
                    {props.children}
                </RootLayout>
            </React.Suspense>
        </div>
    );
};

export default PrivateLayout;
