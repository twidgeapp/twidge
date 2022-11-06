import { useContext, useEffect, useMemo, useState } from 'react';
import CursorIcon from './icon';
import StateContext from '@twidge/utils/state';
import usePresenceJS from '../../hooks/usePresenceJS';
import { PresenceMouseMoveData } from '../../utils/types/presence';

interface Props {
    room_name: string | undefined;
    presence_id: string;
}

const OtherCursor = (props: Props) => {
    const [coords, setCoords] = useState({ left: 0, top: 0 });

    const { presence } = usePresenceJS({ room: props.room_name });
    const { global } = useContext(StateContext);

    useEffect(() => {
        presence?.on<PresenceMouseMoveData>(
            `mouse-${props.presence_id}-move`,
            (data) => {
                console.log(data);
                setCoords({ left: data.x, top: data.y });
            }
        );
    }, [coords]);

    return useMemo(
        () => (
            <div
                className="absolute pointer-events-none z-50"
                style={{ left: coords.left, top: coords.top }}
            >
                <CursorIcon />
                <div className="relative w-full h-full">
                    <div
                        className={`absolute top-1 left-0 bg-app-sidebar-background border border-text/10 text-sm px-1 py-1 rounded-xl flex items-center gap-2 ${'min-w-[125px]'}`}
                    >
                        <h1 className="truncate min-w-[75px]">asd</h1>
                    </div>
                </div>
            </div>
        ),
        [coords]
    );
};

export default OtherCursor;
