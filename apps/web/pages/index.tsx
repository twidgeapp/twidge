import Head from 'next/head';
import PrivateLayout from '../layouts/private';
import { trpc } from '../utils/trpc';

export default function IndexPage() {
    const { data } = trpc.user.get.useQuery();

    return (
        <PrivateLayout isSpacePage={false} fallback={<h1>Loading</h1>}>
            <Head>
                <title>Twidge</title>
                <link rel="icon" href="/logo.svg" />
            </Head>
        </PrivateLayout>
    );
}
