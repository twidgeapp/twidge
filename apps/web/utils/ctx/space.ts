import { Space } from '@twidge/utils/state/spaces';
import Whiteboard from '@twidge/utils/state/whiteboard';
import { createContext } from 'react';

interface ISpaceContext {
    space?: Space;
    whiteboard?: Whiteboard;
}

const SpaceContext = createContext<ISpaceContext>({
    space: undefined,
    whiteboard: undefined,
});

export default SpaceContext;
