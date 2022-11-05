import React, { useContext, useEffect } from 'react';
import WhiteBoardPage from '../../../../hoc/spaces/WhiteboardPage';
import useCurrentSpace from '../../../../hooks/useCurrentSpace';
import useCurrentWhiteboard from '../../../../hooks/useCurrentWhiteboard';
import SpaceContext from '../../../../utils/ctx/space';
import usePresenceJS from '../../../../hooks/usePresenceJS';

const WhiteboardComponent = () => {
    const whiteboard = useCurrentWhiteboard();
    const space = useCurrentSpace();
    const { allUsers } = usePresenceJS({
        room:
            space && whiteboard
                ? `spaces/${space.id}/whiteboards/${whiteboard.id}`
                : undefined,
    });

    useEffect(() => {
        console.log(allUsers);
    }, [allUsers]);

    return (
        <SpaceContext.Provider value={{ space: space, whiteboard: whiteboard }}>
            <WhiteBoardPage />
        </SpaceContext.Provider>
    );
};

export default function IndexPage() {
    return <WhiteboardComponent></WhiteboardComponent>;
}
