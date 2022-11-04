interface PresenceJoinPayload {
    presence_id: string;
    user: {
        id: string;
        name: string;
        avatar: string;
    };
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

export { PresenceJoinPayload, PresenceGetData, PresenceLeavePayload };
