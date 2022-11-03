import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import * as Icons from '@tabler/icons';
import { Spaces } from '@prisma/client';
import { useRouter } from 'next/router';

interface Props {
    space?: Spaces;
    icon?: string;
}

const Favicon = (props: Props) => {
    const [icon, setIcon] = React.useState<string | undefined>();
    const { space } = props;
    const router = useRouter();

    React.useEffect(() => {
        if (!space) return;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const Icon = Icons[props.icon || space.icon];

        // convert Icon to a blob url and set it as favicon
        const el = document.createElement('div');
        const root = createRoot(el);

        const colors = space.colors as any;

        // Render the actual icon
        root.render(<Icon color={`#${colors.iconColor}`} />);

        // THIS IS A HACK TO GET THE ICON TO RENDER AND THEN GET THE CONTENTS
        setTimeout(() => {
            const svg = el.innerHTML;
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            setIcon(url);

            root.unmount();
        }, 100);
    }, [space, props.icon]);

    return (
        <>
            {ReactDOM.createPortal(
                <link rel="icon" href={icon} />,
                document.head
            )}
        </>
    );
};

export default Favicon;
