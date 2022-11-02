import StateContext from '@twidge/utils/state';
import Head from 'next/head';
import { useContext } from 'react';
import UserPage from '../../hoc/settings/user';
import PrivateLayout from '../../layouts/private';

export default function IndexPage() {
    const { user } = useContext(StateContext);

    return (
        <PrivateLayout isSpacePage={false} fallback={<h1>Loading</h1>}>
            <Head>
                <title>Settings - Twidge</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
            <UserPage user={user} />
        </PrivateLayout>
    );
}
