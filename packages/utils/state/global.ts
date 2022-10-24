import { action, makeAutoObservable, observable } from "mobx";

class Global {
	@observable platform: "Linux" | "Darwin" | "Windows_NT" | null = null;
	@observable version: string = "0.0.0";
	
	// twidge is built for offline first support so we start of with isOnline = false
	@observable isOnline: boolean = false;
	
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

	@action
	setIsOnline(isOnline: boolean){
		this.isOnline = isOnline;
	}
}

export default Global;
