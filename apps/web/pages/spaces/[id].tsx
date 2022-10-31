import StateContext from '@twidge/utils/state';
import Spaces, { Space } from '@twidge/utils/state/spaces';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import SpacePage from '../../hoc/spaces/SpacePage';
import SpaceContext from '../../utils/ctx/space';

const SpacesComponent = observer(
    ({ spaces, id }: { spaces: Spaces; id: string }) => {
        const [currentSpace, setCurrentSpace] = useState<Space | undefined>();

        useEffect(() => {
            setCurrentSpace(spaces.spaces.find((space) => space.id === id));
        }, [id]);

        return (
            <SpaceContext.Provider value={{ space: currentSpace }}>
                <SpacePage />
            </SpaceContext.Provider>
        );
    }
);

export default function IndexPage() {
    const router = useRouter();
    const { id } = router.query;
    const { spaces } = useContext(StateContext);

    return <SpacesComponent spaces={spaces} id={id as any} />;
}
