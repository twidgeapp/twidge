import { action, makeAutoObservable, observable } from "mobx";

class Global {
	@observable platform: "Linux" | "Darwin" | "Windows_NT" | null = null;
	@observable version: string = "0.0.0";

	constructor() {
		makeAutoObservable(this);
	}

	@action
	setPlatform(platform: "Linux" | "Darwin" | "Windows_NT") {
		this.platform = platform;
	}

	@action
	setVersion(version: string) {
		this.version = version;
	}
}

export default Global;
