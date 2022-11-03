import React from 'react';
import WhiteBoardPage from '../../../../hoc/spaces/WhiteboardPage';
import useCurrentSpace from '../../../../hooks/useCurrentSpace';
import useCurrentWhiteboard from '../../../../hooks/useCurrentWhiteboard';
import SpaceContext from '../../../../utils/ctx/space';

const WhiteboardComponent = () => {
    const whiteboard = useCurrentWhiteboard();
    const space = useCurrentSpace();

    return (
        <SpaceContext.Provider value={{ space: space, whiteboard: whiteboard }}>
            <WhiteBoardPage />
        </SpaceContext.Provider>
    );
};

export default function IndexPage() {
    return <WhiteboardComponent></WhiteboardComponent>;
}
