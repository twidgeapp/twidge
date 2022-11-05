import GlobalState from '@twidge/utils/state/global';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import usePresenceJS from '../../hooks/usePresenceJS';

interface Props {
    stateContext: GlobalState;
}

const CursorChat = (props: Props) => {
    const { presence, allUsers } = usePresenceJS({});

    return <div className="w-[400vw] h-[400vh]"></div>;
};

export default observer(CursorChat);
