import GlobalStore from "@twidge/utils/state/global";
import { useContext, useEffect, useState } from "react";
import { type } from "@tauri-apps/api/os";
import GlobalContext, { IGlobalContext } from "@twidge/utils/ctx";

const usePlatform = () => {
	const [platform, setPlatform] = useState<string | null>(null);
	const ctx = useContext<IGlobalContext>(GlobalContext);
	const { globalStore: globalState } = ctx;

	useEffect(() => {
		if (!globalState.platform) {
			type().then((platform) => {
				globalState.setPlatform(platform);
				setPlatform(globalState.platform!);
			});
		} else {
			setPlatform(globalState.platform);
		}
	}, []);

	return platform;
};

export default usePlatform;
