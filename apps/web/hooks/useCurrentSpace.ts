import StateContext from '@twidge/utils/state';
import { Space } from '@twidge/utils/state/spaces';
import { autorun } from 'mobx';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

const useCurrentSpace = () => {
    const router = useRouter();
    const { id } = router.query;
    const { spaces } = useContext(StateContext);
    const [space, setSpace] = useState<Space | undefined>();

    React.useEffect(() => {
        const autoRunner = autorun(() => {
            setSpace(spaces.spaces.find((s) => s.id === id));
        });

        return () => {
            autoRunner();
        };
    }, [id]);

    return space;
};

export default useCurrentSpace;
