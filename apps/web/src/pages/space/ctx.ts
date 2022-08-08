import { createContext } from 'react';
import { Space } from '@twidge/utils/spaces/types';

interface ISpaceCtx {
	currentSpace: Space | null;
}

const SpaceCtx = createContext<ISpaceCtx>({
	currentSpace: null,
});

export default SpaceCtx;
