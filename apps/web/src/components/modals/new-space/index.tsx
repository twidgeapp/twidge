import PopoverDemo from "@twidge/ui/popover"
import IconPickerPopover from "./icon-picker";
import { useState } from "react";
import * as Icons from "phosphor-react"

const NewSpaceModal = () => {
    const [icon, setIcon] = useState("Chalkboard");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const Icon: Icons.Icon = Icons[icon];

    return (
        <div className="w-full h-full p-4 text-white min-w-[400px]">
            <h1 className="!text-2xl font-extrabold">Create a new Space</h1>
            <div className="w-full h-full flex flex-col gap-4 mt-5">
                <div className="w-full h-12 flex flex-col gap-2">
                    <PopoverDemo>
                        <div className="bg-dark-gray3 p-1 w-fit rounded-sm border border-dark-gray5">
                            <Icon size={18} />
                        </div>
                        <IconPickerPopover onSelect={setIcon} />
                    </PopoverDemo>
                </div>
            </div>
        </div>
    )
}

export default NewSpaceModal;