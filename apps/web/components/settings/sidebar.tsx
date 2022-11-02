import Link from 'next/link';
import { useRouter } from 'next/router';

const elements = [
    {
        label: 'Profile',
        type: 'item',
        url: '/settings',
    },
    {
        type: 'item',
        label: 'Profile',
        url: '/settings/asd',
    },
    {
        type: 'seperator',
    },
];

const SettingsSidebar = () => {
    const router = useRouter();

    return (
        <div className="w-64 bg-app-sidebar-background border-r border-r-text/10 ">
            <div className="w-full h-12 border-b border-b-text/10 flex items-center px-4 gap-2">
                <h1 className="text-[12px] uppercase font-extrabold text-opacity-95 text-text-light">
                    User settings
                </h1>
            </div>
            <div className="mt-3 flex flex-col gap-2 px-3">
                {elements.map((element, idx) => (
                    <>
                        {element.type === 'seperator' ? (
                            <div className="h-[1px] border-b border-b-text/10"></div>
                        ) : (
                            <Link
                                key={idx}
                                href={element.url!}
                                className={`flex rounded-md items-center gap-1 w-full px-3 py-1 ${
                                    router.pathname == element.url
                                        ? 'bg-text/10'
                                        : 'hover:bg-text/5'
                                } transition-all duration-150`}
                            >
                                <div className="text-sm text-text-light">
                                    {element.label}
                                </div>
                            </Link>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default SettingsSidebar;
