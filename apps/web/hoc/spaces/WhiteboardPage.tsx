import React, { useContext } from 'react';
import SpaceContext from '../../utils/ctx/space';
import SpaceLayout from '../../layouts/space';

const WhiteBoardPage = () => {
    const { space: currentSpace, whiteboard: currentWhiteboard } =
        useContext(SpaceContext);

    return (
        <SpaceLayout
            title={`${currentWhiteboard?.name} - ${currentSpace?.name} - Twidge`}
            icon={currentWhiteboard?.icon}
        >
            asd
        </SpaceLayout>
    );
};

export default WhiteBoardPage;
