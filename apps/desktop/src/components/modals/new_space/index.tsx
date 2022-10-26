import { IconBook } from "@tabler/icons";
import GlobalContext from "@twidge/utils/ctx";
import { useContext, useState } from "react";
import ColorPicker from "./color_picker";
import Popover from "@twidge/components/popover"
import IconPicker from "./icon_picker";
import * as Icons from "@tabler/icons";

const NewSpaceModal = () => {
	const [primaryColor, setPrimaryColor] = useState(192);
	const [accentColor, setAccentColor] = useState(298);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const { spaceStore } = useContext(GlobalContext);
	const [validations, setValidations] = useState<any>({});
	const [color, setColor] = useState("#512fc2");
	const [icon, setIcon] = useState("IconBook");
	// @ts-ignore
	const Icon = Icons[icon];

	const onSubmit = () => {
		if (name === "" || description === "") {
			setValidations({
				name: name === "",
				description: description === "",
			});
		} else {
			let id = spaceStore.spaces.length + 1;
			spaceStore.addSpace({
				colors: {
					primary: primaryColor,
					accent: accentColor,
				},
				created_at: "",
				description: description,
				icon: "IconBook",
				id: id,
				name: name,
				updated_at: "",
			});

			document.getElementById("close-button-modal")?.click();
		}
	};


	return (
		<div className="w-[480px] bg-app-modal/40 backdrop-blur-xl shadow-lg border border-text/10 rounded-xl select-none font-mulish">
			<div className="px-6 pt-6  rounded-t-xl">
				<h1 className="text-white text-2xl font-bold">Create a new Space</h1>
				<div className="flex flex-col gap-3 mt-6">
					<div className="flex gap-2">
						<Popover>
							<button className="p-2 !w-[34px] !h-[34px] bg-app-bg grid place-items-center cursor-pointer text-text rounded-lg border border-text/10 focus:outline-none">
								<Icon size={16} color={color} />
							</button>
							<IconPicker color={color} icon={icon} setColor={setColor} setIcon={setIcon} />
						</Popover>

						<input
							style={{
								border:
									validations["name"] === true ? "1px solid red" : "undefined",
							}}
							placeholder="Name"
							onInput={(e) => setName(e.currentTarget.value)}
							type="text"
							className="bg-app-bg text-sm grid place-items-center px-2 text-text rounded-lg border border-text/10 w-full focus:outline-none"
						/>
					</div>
					<div className="flex gap-1">
						<input
							placeholder="Description"
							style={{
								border:
									validations["description"] === true
										? "1px solid red"
										: "undefined",
							}}
							onInput={(e) => setDescription(e.currentTarget.value)}
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
					<ColorPicker text="Primary" setColor={setPrimaryColor} />
					<ColorPicker text="Accent" setColor={setAccentColor} />
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
					<button
						onClick={onSubmit}
						className="bg-blue-dark hover:bg-blue transition-all duration-150 text-text h-[34px] grid place-items-center px-4 rounded-lg border border-text/10 text-sm focus:outline-none"
					>
						Create
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewSpaceModal;
