import { IconBook } from "@tabler/icons"
const NewSpaceModal = () => {
    return (
        <div className="w-[480px] p-6 bg-app-modal/40 backdrop-blur-xl shadow-lg border border-app-modal rounded-xl">
            <h1 className="text-white text-2xl font-bold">Create a new Space</h1>
            <div className="flex flex-col gap-3 mt-3">
                <div className="flex gap-1">
                    <button className="p-2 !w-[34px] !h-[34px] bg-app-modal grid place-items-center cursor-pointer text-text rounded-lg border border-text/10 focus:outline-none">
                        <IconBook size={16} className="text-blue" />
                    </button>
                    <input placeholder="Name" type="text" className="bg-app-modal text-sm grid place-items-center px-2 text-text rounded-lg border border-text/10 w-full focus:outline-none" />
                </div>
                <div className="flex gap-1">
                    <input placeholder="Description" type="text" className="bg-app-modal h-[34px] grid place-items-center px-2 text-text rounded-lg border border-text/10 text-sm w-full focus:outline-none" />
                </div>
                <div className="flex gap-1 w-full items-center justify-end pt-3">
                    <button onClick={() => {
                        document.getElementById("close-button-modal")?.click()
                    }} className="border border-text/10 hover:bg-text/10 transition-all duration-150 text-text h-[34px] grid place-items-center px-4 rounded-lg text-sm focus:outline-none">
                        Cancel
                    </button>
                    <button className="bg-blue-dark text-text h-[34px] grid place-items-center px-4 rounded-lg border border-text/10 text-sm focus:outline-none">
                        Create
                    </button>
                </div>
            </div>
        </div >
    )
}

export default NewSpaceModal;