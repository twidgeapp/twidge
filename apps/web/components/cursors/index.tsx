import GlobalState from '@twidge/utils/state/global';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import usePresenceJS from '../../hooks/usePresenceJS';
import MeCursor from './me';
import OtherCursor from './others';

interface Props {
    stateContext: GlobalState;
    viewerRef: React.RefObject<HTMLDivElement>;
    room_name: string | undefined;
}

const CursorChat = (props: Props) => {
    const { allUsers } = usePresenceJS({ room: props.room_name });

    useEffect(() => {
        console.log(allUsers);
    }, [allUsers]);

    return (
        <div className="w-full h-full relative pointer-events-none">
            <MeCursor room_name={props.room_name} viewerRef={props.viewerRef} />
            {allUsers.map((user, idx) => (
                <OtherCursor
                    key={idx}
                    room_name={props.room_name}
                    presence_id={user.presence_id}
                />
            ))}
        </div>
    );
};

export default observer(CursorChat);
