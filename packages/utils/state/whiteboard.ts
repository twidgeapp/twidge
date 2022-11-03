import { Space } from './spaces';
import { action, makeAutoObservable, observable } from 'mobx';
import { Whiteboards as PrismaWhiteboards } from '@prisma/client';

class Whiteboard {
    @observable id = '';
    @observable name = '';
    @observable icon = 'IconArtBoard';
    @observable permissions: any = {};
    @observable createdAt: Date = new Date();
    @observable updatedAt: Date = new Date();
    @observable spacesId: string | null = null;

    constructor(whiteboard: PrismaWhiteboards, space: Space) {
        makeAutoObservable(this);
        this.setWhiteboard(whiteboard);
    }

    @action
    updateWhiteboard(whiteboard: Whiteboard) {
        this.id = whiteboard.id!;
        this.name = whiteboard.name;
        this.icon = whiteboard.icon;
        this.permissions = whiteboard.permissions;
        this.createdAt = whiteboard.createdAt as Date;
        this.updatedAt = whiteboard.updatedAt as Date;
        this.spacesId = whiteboard.id;
    }

    @action
    setWhiteboard(whiteboard: PrismaWhiteboards) {
        this.id = whiteboard.id!;
        this.name = whiteboard.name;
        this.icon = whiteboard.icon;
        this.permissions = whiteboard.permissions;
        this.createdAt = whiteboard.createdAt as Date;
        this.updatedAt = whiteboard.updatedAt as Date;
        this.spacesId = whiteboard.id;
    }

    @action
    clearWhiteboard() {
        this.id = '';
        this.name = '';
        this.icon = 'IconCloud';
        this.permissions = {};
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.spacesId = null;
    }

    @action
    setWhiteboardId(id: string) {
        this.id = id;
    }
}

export default Whiteboard;
