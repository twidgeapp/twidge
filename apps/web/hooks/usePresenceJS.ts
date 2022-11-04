import StateContext from '@twidge/utils/state';
import Presence from '@yomo/presencejs';
import { useContext, useEffect, useState } from 'react';
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
    let events: any[] = [];
    let allUsers: PresenceJoinPayload[] = [];

    const toRoom = (room: string) => {
        if (presence) {
            allUsers = [];
            events = [];
            presence.toRoom(room);
        }
    };

    const getEvents = () => {
        return events;
    };

    const getAllUsersInRoom = () => {
        return allUsers;
    };

    useEffect(() => {
        console.log(
            `[PresenceJS] Connecting to PresenceJS with user ${global.uniqueId}`
        );
        if (global.presence) {
            setPresence(global.presence);
        } else if (props.room) {
            const yomo = new Presence('wss://prsc.yomo.dev', {
                auth: {
                    type: 'token',
                    endpoint: '/api/presence/auth',
                },
            });

            yomo.on('connected', () => {
                global.setPresence(yomo);
                setPresence(yomo);
                console.log('CONNECTED');

                yomo.send<PresenceJoinPayload>('join', {
                    user: {
                        avatar: user.image!,
                        id: user.id,
                        name: user.name!,
                    },
                    presence_id: global.uniqueId,
                });

                yomo.send<PresenceGetData>('get', {
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
                    allUsers.push(data);
                }
            });

            yomo.on<PresenceGetData>('get', (data) => {
                if (data.presence_id === global.uniqueId) return;

                if (data.key === 'users') {
                    yomo.send<PresenceGetData>('get-resp', {
                        presence_id: global.uniqueId,
                        key: 'users',
                        for: data.presence_id,
                        payload: allUsers,
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
                    // remove any duplicates from data.payload
                    const users = data.payload?.filter(
                        (u) => u.presence_id !== global.uniqueId
                    );
                    if (users) {
                        users.forEach((u) => {
                            const user = allUsers.find(
                                (u2) => u2.presence_id === u.presence_id
                            );
                            if (!user) {
                                allUsers.push(u);
                            }
                        });
                        console.log(allUsers);
                    }
                }
            });

            yomo.on<PresenceLeavePayload>('leave', (data) => {
                const index = allUsers.findIndex(
                    (u) => u.presence_id === data.presence_id
                );
                if (index !== -1) {
                    allUsers.splice(index, 1);
                }
            });

            yomo.on('message', (message) => {
                events.push(message);
            });
        }

        return () => {
            presence?.send<PresenceLeavePayload>('leave', {
                presence_id: global.uniqueId,
            });
            presence?.close();
        };
    }, [props.room]);

    return { presence, toRoom, getEvents, getAllUsersInRoom };
};

export default usePresenceJS;
