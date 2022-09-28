import {WhiteboardItem} from "@twidge/utils/bindings";
import {convertFileSrc} from "@tauri-apps/api/tauri";


export const checkIfImage = (file_type: string) => file_type === "png" || file_type === "jpeg" || file_type === "jpg" || file_type === "gif" || file_type === "svg"

const Text = ({element}: { element: WhiteboardItem }) => {
    return (
        <div className="text-white text-sm">
            {element.value}
        </div>
    )
}

const WhiteboardItemElement = ({element}: { element: WhiteboardItem }) => {
    if (element.item_type === 'text') {
        return <Text element={element}/>
    } else if (checkIfImage(element.item_type)) {
        return <img className="rounded-md" src={convertFileSrc(element.value)}/>
    }

    return <div>Unknown item type</div>
}

export default WhiteboardItemElement;