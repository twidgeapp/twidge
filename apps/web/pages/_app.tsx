import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { trpc } from '../utils/trpc';
import { SessionProvider } from 'next-auth/react';
import { withTRPC } from '@trpc/next';
import { AppRouter } from '../server/routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@twidge/config/colors.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="dark">
            <SessionProvider session={pageProps.session}>
                <ReactQueryDevtools />
                <Component {...pageProps} />
            </SessionProvider>
        </div>
    );
};

export default withTRPC<AppRouter>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config({ ctx }) {
        const url = process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}/api/trpc`
            : 'http://127.0.0.1:3000/api/trpc';

        return {
            url,
            headers: {
                'x-ssr': '1',
            },
        };
    },
    ssr: false,
})(App);
