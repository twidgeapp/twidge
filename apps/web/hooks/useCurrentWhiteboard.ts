import Whiteboard from '@twidge/utils/state/whiteboard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useCurrentSpace from './useCurrentSpace';

const useCurrentWhiteboard = () => {
    const space = useCurrentSpace();
    const router = useRouter();
    const { whiteboardId } = router.query;
    const [whiteboard, setWhiteboard] = useState<Whiteboard>();

    useEffect(() => {
        if (space) {
            setWhiteboard(space.whiteboards.find((w) => w.id === whiteboardId));
        }
    }, [whiteboardId, space]);

    return whiteboard;
};

export default useCurrentWhiteboard;
