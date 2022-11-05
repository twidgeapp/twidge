import React, { useContext } from 'react';
import SpaceContext from '../../utils/ctx/space';
import SpaceLayout from '../../layouts/space';
import CursorChat from '../../components/cursors';
import StateContext from '@twidge/utils/state';

const WhiteBoardPage = () => {
    const { space: currentSpace, whiteboard: currentWhiteboard } =
        useContext(SpaceContext);
    const { global } = useContext(StateContext);

    return (
        <SpaceLayout
            title={`${currentWhiteboard?.name} - ${currentSpace?.name} - Twidge`}
            icon={currentWhiteboard?.icon}
        >
            <div className="w-full h-full overflow-auto">
                <CursorChat stateContext={global} />
            </div>
        </SpaceLayout>
    );
};

export default WhiteBoardPage;
