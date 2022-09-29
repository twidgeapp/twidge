import {WhiteboardItem} from "@twidge/utils/bindings";
import {convertFileSrc} from "@tauri-apps/api/tauri";
import AudioPlayer from "./audio";
import {Document24Filled} from "@fluentui/react-icons";
import {invoke} from "@tauri-apps/api";

export const checkIfImage = (file_type: string) => file_type === "png" || file_type === "jpeg" || file_type === "jpg" || file_type === "gif" || file_type === "svg"

export const checkIfVideo = (file_type: string) => file_type === "mp4" || file_type === "webm" || file_type === "ogg" || file_type === "avi" || file_type === "mov" || file_type === "quicktime"

export const checkIfAudio = (file_type: string) => file_type === "mp3" || file_type === "wav" || file_type === "ogg" || file_type === "flac" || file_type === "aac" || file_type === "mpeg" || file_type === "m4a"

export const checkIfMedia = (file_type: string) => checkIfImage(file_type) || checkIfVideo(file_type)

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
        return <img className="rounded-md h-full w-full" src={convertFileSrc(element.value)}/>
    } else if (checkIfVideo(element.item_type)) {
        return <video className="rounded-md h-full w-full" src={convertFileSrc(element.value)} controls={true}/>
    } else if (checkIfAudio(element.item_type)) {
        return (
            <AudioPlayer element={element}/>
        )
    }

    return <div onDoubleClick={() => {
        invoke("open_in_default_app", {data: element.value})
    }}
                className="text-white text-sm flex flex-col items-center w-full h-full text-dark-blue11 hover:text-dark-blue9">
        <Document24Filled className={"w-full h-full"}/>
    </div>

}

export default WhiteboardItemElement;