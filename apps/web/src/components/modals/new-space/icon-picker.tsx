import * as Icons from "phosphor-react"
import { useState, useMemo } from "react"

const IconKeys = Object.keys(Icons);

const batchIcons = (icons: string[], batch: number) => {
    const batches = [];
    for (let i = 0; i < icons.length; i += batch) {
        batches.push(icons.slice(i, i + batch));
    }
    return batches;
}


interface Props {
    onSelect: (icon: string) => void

}

const IconPickerPopover = (props: Props) => {
    const [search, setSearch] = useState("");

    const allIcons = useMemo(() => {
        if (search == "") {
            return batchIcons(IconKeys.splice(0, 60), 6);
        } else {
            return batchIcons(IconKeys.filter((icon) => icon.toLowerCase().includes(search.toLowerCase())).splice(0, 60), 6);
        }
    }, [search])

    return (
        <div className="w-full h-full bg-dark-gray6 backdrop-blur-xl bg-opacity-40 rounded-lg shadow-xl p-2 min-w-[200px] max-w-[200px]">
            <input onInput={(e) => setSearch(e.currentTarget.value)} type="text" className="bg-transparent outline-none border border-dark-gray6 px-1 text-[12px] py-1 rounded-sm w-full " placeholder="Search..." />
            <div className="w-full h-full flex gap-2 mt-2 flex-col max-h-32 overflow-y-auto custom-scrollbar">
                {allIcons.map((icons, idx) => {
                    return (
                        <div key={idx} className="w-full h-full flex gap-2">
                            {icons.map((icon, idx) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                const Icon: Icons.Icon = Icons[icon];
                                return (
                                    <button onClick={() => {
                                        props.onSelect(icon);
                                    }} key={idx} className="w-6 h-6 grid place-items-center rounded-sm transition-all duration-50 hover:bg-dark-gray2">
                                        <Icon size={18} />
                                    </button>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IconPickerPopover