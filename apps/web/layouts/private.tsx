import { signIn, useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import SpaceLayout from './spaces';

interface Props {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

const PrivateLayout = (props: Props) => {
    const { status } = useSession();

    if (status === 'unauthenticated') {
        signIn();
        return <div>Redirecting...</div>;
    }

    if (status == 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-screen h-screen bg-app-background text-text-light font-inter">
            <SpaceLayout>{props.children}</SpaceLayout>
        </div>
    );
};

export default PrivateLayout;
