interface PresenceJoinPayload {
    presence_id: string;
    user: {
        id: string;
        name: string;
        avatar: string;
    };
    color?: string;
}

interface PresenceLeavePayload {
    presence_id: string;
}

interface PresenceGetData {
    presence_id: string;
    for?: string;
    key: string;

    payload?: PresenceJoinPayload[];
}

interface PresenceMouseMoveData {
    presence_id: string;
    x: number;
    y: number;
}

export type {
    PresenceJoinPayload,
    PresenceGetData,
    PresenceLeavePayload,
    PresenceMouseMoveData,
};

export default {};
