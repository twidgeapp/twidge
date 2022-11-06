import { useContext, useEffect, useMemo, useState } from 'react';
import CursorIcon from './icon';
import StateContext from '@twidge/utils/state';
import usePresenceJS from '../../hooks/usePresenceJS';
import { PresenceMouseMoveData } from '../../utils/types/presence';

interface Props {
    room_name: string | undefined;
    viewerRef: React.RefObject<HTMLDivElement>;
}

const MeCursor = (props: Props) => {
    const [coords, setCoords] = useState({ left: 0, top: 0 });
    const [chat, setChat] = useState(false);
    const [chatValue, setChatValue] = useState('');
    const { user } = useContext(StateContext);

    const { presence } = usePresenceJS({ room: props.room_name });
    const { global } = useContext(StateContext);

    useEffect(() => {
        presence?.send<PresenceMouseMoveData>(`mouse-${global.uniqueId}-move`, {
            presence_id: global.uniqueId,
            x: coords.left,
            y: coords.top,
        });
    }, [coords]);

    useEffect(() => {
        // I need to use the react viewer ref to get the current position of the cursor this is a placeholder
        const container = document.body;
        container.style.cursor = 'none';

        if (!container) return;

        // show cursor relative to the container
        const handleMouseMove = (e: MouseEvent) => {
            const { left, top } = container.getBoundingClientRect();
            setCoords({ left: e.clientX - left, top: e.clientY - top });
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            // check if slash is clicked
            if (e.key === '/') {
                setChat(true);
            } else if (e.key === 'Escape') {
                setChat(false);
            }
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return useMemo(
        () => (
            <div
                className="absolute pointer-events-none z-50"
                style={{ left: coords.left, top: coords.top }}
            >
                <CursorIcon />
                <div className="relative w-full h-full">
                    <div
                        className={`absolute top-1 left-0 bg-app-sidebar-background border border-text/10 text-sm px-1 py-1 rounded-xl flex items-center gap-2 ${
                            chat ? 'min-w-max' : 'min-w-[125px]'
                        }`}
                    >
                        <img
                            src={user.image!}
                            alt="user"
                            width={'24px'}
                            className="rounded-full "
                        />
                        <h1 className="truncate min-w-[75px]">{user.name}</h1>
                        {chat && (
                            <input
                                type="text"
                                autoFocus
                                onChange={(e) => setChatValue(e.target.value)}
                                className="bg-transparent text-white outline-none w-full"
                            />
                        )}
                    </div>
                </div>
            </div>
        ),
        [coords, user.name, chat]
    );
};

export default MeCursor;
