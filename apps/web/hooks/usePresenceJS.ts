import StateContext from '@twidge/utils/state';
import Presence from '@yomo/presencejs';
import { useContext, useEffect, useRef, useState } from 'react';
import {
    PresenceGetData,
    PresenceJoinPayload,
    PresenceLeavePayload,
} from '../utils/types/presence';

interface Props {
    room?: string;
}

const usePresenceJS = (props: Props) => {
    const [presence, setPresence] = useState<Presence>();
    const { global, user } = useContext(StateContext);
    // we don't want to use a react state as we don't want the ui to re-render everytime there is a new message
    // instead we use a getEvents() method to get all the events
    const [allUsers, setAllUsers] = useState<PresenceJoinPayload[]>([]);

    const toRoom = (room: string) => {
        if (presence) {
            setAllUsers([]);
            presence.toRoom(room);
        }
    };

    // listen to changes in the allUsers

    useEffect(() => {
        let yomo: Presence | undefined = undefined;
        console.log(
            `[PresenceJS] Connecting to PresenceJS with user ${global.uniqueId}`
        );
        if (global.presence) {
            setPresence(global.presence);
        } else if (props.room) {
            yomo = new Presence('wss://prsc.yomo.dev', {
                auth: {
                    type: 'token',
                    endpoint: '/api/presence/auth',
                },
            });

            yomo.on('connected', () => {
                global.setPresence(yomo!);
                setPresence(yomo);
                console.log('CONNECTED');
                const finalUser: PresenceJoinPayload = {
                    color: global.color,
                    user: {
                        avatar: user.image!,
                        id: user.id,
                        name: user.name!,
                    },
                    presence_id: global.uniqueId,
                };

                yomo!.send<PresenceJoinPayload>('join', finalUser);

                yomo!.send<PresenceGetData>('get', {
                    presence_id: global.uniqueId,
                    key: 'users',
                });
            });

            yomo.on<PresenceJoinPayload>('join', (data) => {
                // check if the user is already in the list
                const user = allUsers.find(
                    (u) => u.presence_id === data.presence_id
                );

                if (!user) {
                    setAllUsers((prev) => {
                        let finalUsers = [...prev, data];
                        finalUsers = finalUsers.filter(
                            (u, id) =>
                                finalUsers.findIndex(
                                    (f) => f.presence_id === u.presence_id
                                ) === id
                        );
                        return finalUsers;
                    });
                }
            });

            yomo.on<PresenceGetData>('get', (data) => {
                if (data.presence_id === global.uniqueId) return;

                if (data.key === 'users') {
                    setAllUsers((users) => {
                        yomo!.send<PresenceGetData>('get-resp', {
                            presence_id: global.uniqueId,
                            key: 'users',
                            for: data.presence_id,
                            payload: users,
                        });

                        return users;
                    });
                }
            });

            yomo.on<PresenceGetData>('get-resp', (data) => {
                if (
                    data.presence_id === global.uniqueId ||
                    data.for !== global.uniqueId
                )
                    return;

                if (data.key === 'users') {
                    setAllUsers((prev) => {
                        let finalUsers: PresenceJoinPayload[] = [
                            ...prev,
                            ...data.payload!,
                        ];
                        finalUsers = finalUsers.filter(
                            (u, id) =>
                                finalUsers.findIndex(
                                    (f) => f.presence_id === u.presence_id
                                ) === id
                        );
                        return finalUsers;
                    });
                }
            });

            yomo.on<PresenceLeavePayload>('leave', (data) => {
                setAllUsers((prev) => {
                    const finalUsers = [...prev];
                    const index = finalUsers.findIndex(
                        (u) => u.presence_id === data.presence_id
                    );
                    if (index !== -1) {
                        finalUsers.splice(index, 1);
                    }

                    return finalUsers;
                });
            });
        }

        const goOffline = async () => {
            yomo?.send<PresenceLeavePayload>('leave', {
                presence_id: global.uniqueId,
            });

            // wait for 5 seconds before disconnecting
            return await new Promise((resolve) => {
                setTimeout(resolve, 500);
            });
        };

        const cleanup = async () => {
            await goOffline();
            yomo?.close();
        };

        window.addEventListener('beforeunload', async (e) => {
            e.preventDefault();

            await cleanup();
        });

        return () => {
            cleanup();
            window.removeEventListener('beforeunload', cleanup);
        };
    }, [props.room]);

    return { presence, toRoom, allUsers };
};

export default usePresenceJS;
