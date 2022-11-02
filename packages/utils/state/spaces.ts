import { action, makeAutoObservable, observable } from 'mobx';

import { Plans, Prisma, Spaces as PrismaSpaces } from '@prisma/client';

class Spaces {
    @observable spaces: Space[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setSpaces(spaces: PrismaSpaces[]) {
        // both Space and PrismaSpaces have the same valeus
        this.spaces = spaces as Space[];
    }

    @action
    addSpace(space: PrismaSpaces) {
        this.spaces = [space as Space, ...this.spaces];
    }

    @action
    removeSpace(spaceId: string) {
        this.spaces = this.spaces.filter((space) => space.id !== spaceId);
    }

    @action
    updateSpace(space: PrismaSpaces) {
        const index = this.spaces.findIndex((s) => s.id === space.id);

        this.spaces[index].updateSpace(space);
    }

    @action
    clearSpaces() {
        this.spaces = [];
    }
}

class Space extends Spaces {
    @observable id = '';
    @observable name = '';
    @observable description = '';
    @observable icon = '';
    @observable colors: any = {};
    @observable createdAt: Date = new Date();
    @observable updatedAt: Date = new Date();
    @observable ownerId = '';
    @observable plan: Plans = Plans.FREE;

    constructor(space: PrismaSpaces) {
        super();
        makeAutoObservable(this);
        this.transpilePrismaSpaceToSpace(space);
    }

    transpilePrismaSpaceToSpace(space: PrismaSpaces) {
        this.id = space.id;
        this.name = space.name;
        this.description = space.description;
        this.icon = space.icon;
        this.colors = space.colors;
        this.createdAt = space.createdAt;
        this.updatedAt = space.updatedAt;
        this.ownerId = space.ownerId;
        this.plan = space.plan;
    }

    @action
    setSpace(space: PrismaSpaces) {
        this.transpilePrismaSpaceToSpace(space);
    }

    @action
    clearSpace() {
        this.id = '';
        this.name = '';
        this.description = '';
        this.icon = '';
        this.colors = {};
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.ownerId = '';
        this.plan = Plans.FREE;
    }
}

export { Space };
export default Spaces;
