import { action, makeAutoObservable, observable } from 'mobx';
import PresenceJS from '@yomo/presencejs';

class GlobalState {
    @observable presence: PresenceJS | null = null;
    @observable uniqueId: string;

    constructor() {
        makeAutoObservable(this);
        this.uniqueId =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);

        this.presence = null;
    }

    @action
    setPresence(presence: PresenceJS) {
        this.presence = presence;
    }

    @action
    getPresence() {
        return this.presence;
    }
}

export default GlobalState;
