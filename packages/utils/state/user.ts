import { observable, action, makeAutoObservable } from 'mobx';
import { User as PrismaUser } from '@prisma/client';

class User {
    @observable id = '';
    @observable name: string | null = null;
    @observable email: string | null = null;
    @observable emailVerified: Date | null = null;
    @observable image: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setUser(user: PrismaUser) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.emailVerified = user.emailVerified;
        this.image = user.image;
    }

    getUser() {
        return this;
    }
}

export default User;
