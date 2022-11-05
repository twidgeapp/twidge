import { action, makeAutoObservable, observable } from 'mobx';
import PresenceJS from '@yomo/presencejs';

const colors = ['#4ECB71', '#CBAF4E', '#5F4ECB', '#CB4E83', '#CB4E4E'];

class GlobalState {
    @observable presence: PresenceJS | null = null;
    @observable uniqueId: string;
    @observable color = '#000000';

    constructor() {
        makeAutoObservable(this);
        this.uniqueId =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);

        this.color = colors[Math.floor(Math.random() * colors.length)];
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
