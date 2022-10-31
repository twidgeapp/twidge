import { Space } from '@twidge/utils/state/spaces';
import { createContext } from 'react';

interface ISpaceContext {
    space?: Space;
}

const SpaceContext = createContext<ISpaceContext>({
    space: undefined,
});

export default SpaceContext;
