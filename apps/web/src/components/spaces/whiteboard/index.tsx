import {WhiteboardItem} from "@twidge/utils/bindings";
import {convertFileSrc} from "@tauri-apps/api/tauri";


export const checkIfImage = (file_type: string) => file_type === "png" || file_type === "jpeg" || file_type === "jpg" || file_type === "gif" || file_type === "svg"

export const checkIfVideo = (file_type: string) => file_type === "mp4" || file_type === "webm" || file_type === "ogg";

export const checkIfMedia = (file_type: string) => checkIfImage(file_type) || checkIfVideo(file_type);

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
    } else if (checkIfVideo(element.item_type)) {
        return <video className="rounded-md" src={convertFileSrc(element.value)} controls={true}/>
    }

    return <div>Unknown item type</div>
}

export default WhiteboardItemElement;