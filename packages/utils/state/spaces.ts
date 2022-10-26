import { action, makeAutoObservable, observable } from "mobx";
import * as Icons from "@tabler/icons";
import { Space } from "../../../apps/desktop/src/bindings";

export type IconType = keyof typeof Icons;

interface ISpace {
	id: number;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
	icon: IconType;
	colors: {
		primary: number;
		accent: number;
	};
}

class Spaces {
	@observable spaces: Space[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	@action setSpaces(spaces: Space[]) {
		this.spaces = spaces;
	}

	@action addSpace(space: Space) {
		this.spaces = [space, ...this.spaces];
	}

	@action updateSpace(space: Space) {
		this.spaces = this.spaces.map((s) => {
			if (s.id === space.id) {
				return space;
			}
			return s;
		});
	}

	@action deleteSpace(space: Space) {
		this.spaces = this.spaces.filter((s) => s.id !== space.id);
	}
}

export default Spaces;
