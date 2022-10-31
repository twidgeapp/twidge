import StateContext from '@twidge/utils/state';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import PrivateLayout from '../../layouts/private';
import { trpc } from '../../utils/trpc';

export default function IndexPage() {
    const { data } = trpc.user.get.useQuery();
    // get the id
    const router = useRouter();
    const { id } = router.query;
    const { spaces } = useContext(StateContext);

    const currentSpace = useMemo(() => {
        return spaces.spaces.find((space) => space.id === id);
    }, [id, spaces]);

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
        <PrivateLayout fallback={<div>asd</div>}>
            <div>{JSON.stringify(data)}</div>
        </PrivateLayout>
    );
}
