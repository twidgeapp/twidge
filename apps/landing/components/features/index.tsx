import Card from "./card";
import {
	IconClipboard,
	IconCommand,
	IconNetworkOff,
	IconSpeedboat,
	IconGlobe,
	IconFeather,
} from "@tabler/icons";

const FeaturesSection = () => {
	return (
		<div className="flex items-center justify-end flex-col">
			<div className="py-20 sm:py-32 w-3/4 lg:max-w-[850px] text-white flex flex-col justify-center items-center gap-[22px]">
				<h1 className="font-normal text-5xl text-center">
					We aren’t like your normal productivity tool.
				</h1>
				<span className="text-lg text-center font-medium`">
					We are built by the community, our desktop app is open-source and
					anyone can contribute. We strive to achieve pixel perfection.
				</span>
				<div className="mt-8 flex flex-col gap-8">
					<div className="flex sm:flex-row flex-col sm:gap-8 gap-3">
						<Card
							title="Clipsense"
							illustration={<IconClipboard size={32} />}
							text="Automatically create elements from your clipboard. Open Twidge and start pasting"
						/>
						<Card
							title="Command Menu"
							illustration={<IconCommand size={32} />}
							text="Instantly search/insert tasks, notes, to-do lists, without losing your flow"
						/>
						<Card
							title="Offline first"
							illustration={<IconNetworkOff size={32} />}
							text="Twidge is built for working without network, you can be productive even if you are offline!"
						/>
					</div>
					<div className="flex sm:flex-row flex-col sm:gap-8 gap-3">
						<Card
							title="Open Source"
							illustration={<IconGlobe size={32} />}
							text="Twidge is open source and free to use. You can contribute to the project on GitHub."
						/>
						<Card
							title="Fast"
							illustration={<IconSpeedboat size={32} />}
							text="Twidge is built with Rust and Tauri to provide a fast and native experience. It has a minimal footprint and is blazingly-fast."
						/>
						<Card
							title="Lightweight"
							illustration={<IconFeather size={32} />}
							text="We are committed to help you stay focused and productive. That's why we made Twidge as lightweight as possible."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
