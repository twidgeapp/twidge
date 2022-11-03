import React from 'react';
import SpacePage from '../../../hoc/spaces/SpacePage';
import useCurrentSpace from '../../../hooks/useCurrentSpace';
import SpaceContext from '../../../utils/ctx/space';

const SpacesComponent = () => {
    const space = useCurrentSpace();

    return (
        <SpaceContext.Provider value={{ space: space }}>
            <SpacePage />
        </SpaceContext.Provider>
    );
};

export default function IndexPage() {
    return <SpacesComponent></SpacesComponent>;
}
