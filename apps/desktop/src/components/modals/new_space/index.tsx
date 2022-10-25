import { IconBook } from "@tabler/icons";
import ColorPicker from "./color_picker";

const NewSpaceModal = () => {
	return (
		<div className="w-[480px] bg-app-modal/40 backdrop-blur-xl shadow-lg border border-text/10 rounded-xl select-none font-mulish">
			<div className="px-6 pt-6  rounded-t-xl">
				<h1 className="text-white text-2xl font-bold">Create a new Space</h1>
				<div className="flex flex-col gap-3 mt-6">
					<div className="flex gap-2">
						<button className="p-2 !w-[34px] !h-[34px] bg-app-bg grid place-items-center cursor-pointer text-text rounded-lg border border-text/10 focus:outline-none">
							<IconBook size={16} className="text-blue" />
						</button>
						<input
							placeholder="Name"
							type="text"
							className="bg-app-bg text-sm grid place-items-center px-2 text-text rounded-lg border border-text/10 w-full focus:outline-none"
						/>
					</div>
					<div className="flex gap-1">
						<input
							placeholder="Description"
							type="text"
							className="bg-app-bg h-[34px] grid place-items-center px-2 text-text rounded-lg border border-text/10 text-sm w-full focus:outline-none"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-3 mt-3 px-6 pb-6 pt-3 bg-app-dark/10 rounded-b-xl">
				<h1 className="leading-4 h-3 text-white font-extrabold mt-2">
					Colors:
				</h1>
				<div className="grid grid-cols-2">
					<div className="col-span-1 w-full h-full py-2 gap-2 flex flex-col">
						<ColorPicker text="Primary" setColor={console.log} />
						<ColorPicker text="Secondary" setColor={console.log} />
					</div>
					<div className="col-span-1 w-full h-full p-2 gap-2 flex flex-col">
						<ColorPicker text="Text" setColor={console.log} />
						<ColorPicker text="Buttons" setColor={console.log} />
					</div>
				</div>
				<div className="flex gap-1 w-full items-center justify-end pt-3">
					<button
						onClick={() => {
							document.getElementById("close-button-modal")?.click();
						}}
						className="border border-text/10 hover:bg-text/10 transition-all duration-150 text-text h-[34px] grid place-items-center px-4 rounded-lg text-sm focus:outline-none"
					>
						Cancel
					</button>
					<button className="bg-blue-dark text-text h-[34px] grid place-items-center px-4 rounded-lg border border-text/10 text-sm focus:outline-none">
						Create
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewSpaceModal;
