import { useSession } from 'next-auth/react';

interface Props{
    fallback: React.ReactNode;
    children: React.ReactNode;
}

const PrivateLayout = (props: Props) => {
    const { data, status } = useSession();
    
    if (status == 'loading') {
        return <div>Loading...</div>;
    }
    if (status == 'unauthenticated') {
        // fallback
        return <div>{props.fallback}</div>;
    }
    return (
        <div className='w-screen h-screen bg-app-background'>
            {props.children}
        </div>
    );
};

export default PrivateLayout;