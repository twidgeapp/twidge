import Image from 'next/image';
import { IconBrandGoogle } from '@tabler/icons';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
    const { status } = useSession();
    const router = useRouter();

    if (status === 'authenticated') {
        router.replace('/');
    }

    return (
        <div className="w-screen h-screen bg-app-background font-inter">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-96 bg-app-sidebar-background rounded-lg shadow-lg flex flex-col justify-start items-center border border-app-sidebar-border">
                    <div className="flex flex-col gap-3 items-center text-text-light w-full h-48 bg-app-background/50 rounded-lg justify-center">
                        <Image
                            src={'/logo.svg'}
                            width={74}
                            height={52}
                            alt={'Logo'}
                        />
                        <h1 className="text-2xl font-bold">
                            Ready to be productive?
                        </h1>
                    </div>
                    <div className="py-6">
                        <button
                            onClick={() => {
                                signIn('google');
                            }}
                            className="bg-app-background/90 px-11 py-3 rounded-lg text-red-400 flex gap-2 items-center font-bold"
                        >
                            <IconBrandGoogle size="20px" />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
