import { action, makeAutoObservable, observable } from 'mobx';

import { Spaces as PrismaSpaces } from '@prisma/client';

class Spaces {
    @observable spaces: PrismaSpaces[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setSpaces(spaces: PrismaSpaces[]) {
        this.spaces = spaces;
    }

    @action
    addSpace(space: PrismaSpaces) {
        this.spaces = [space, ...this.spaces];
    }

    @action
    removeSpace(spaceId: string) {
        this.spaces = this.spaces.filter((space) => space.id !== spaceId);
    }

    @action
    updateSpace(space: PrismaSpaces) {
        this.spaces = this.spaces.map((s) => (s.id === space.id ? space : s));
    }

    @action
    clearSpaces() {
        this.spaces = [];
    }
}

export default Spaces;
