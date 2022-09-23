import {useEffect, useState} from "react";

interface IClipBoardItem {
    type: "text" | "file";
    data: string | File;
}

/***
 * Takes in a clipboard data loops through the items and returns an array of IClipBoardItem
 *
 * @param e {ClipboardEvent}
 * @return {IClipBoardItem[] | undefined}
 */
const getClipboardData = (e: ClipboardEvent): IClipBoardItem[] | undefined => {
    const items = e.clipboardData?.items;
    const clipBoardItems: IClipBoardItem[] = [];
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === "string") {
            // get the text
            const text = e.clipboardData?.getData("text/plain");
            clipBoardItems.push({
                type: "text",
                data: text
            });
        } else if (item.kind === "file") {
            // get the file
            const file = item.getAsFile();
            if (!file) return;
            clipBoardItems.push({
                type: "file",
                data: file
            });
        }
    }
    return clipBoardItems;
};

const getClipboardFileType = (file: File) => {
    let fileType = file.type;

    if (fileType.includes("image")) {
        fileType = fileType.replace("image/", "");
        // svg
        fileType = fileType.replace("+xml", "");
        return {
            type: "image",
            fileType
        };
    } else if (fileType.includes("video")) {
        fileType = fileType.replace("video/", "");
        return {
            type: "video",
            fileType
        };
    } else if (fileType.includes("audio")) {
        fileType = fileType.replace("audio/", "");
        return {
            type: "audio",
            fileType
        };
    } else {
        return {
            type: "file",
            fileType
        };
    }
};


/**
 * Adds a paste event listener to the document
 * Infers the type of the clipboard data and returns it
 */
const useClipSense = () => {
    const [items, setItems] = useState<IClipBoardItem[]>([]);

    const onPaste = (e: ClipboardEvent) => {
        const clipBoardItems = getClipboardData(e);
        if (!clipBoardItems) return;

        setItems(clipBoardItems);

        for (const item of clipBoardItems) {
            if (item.type === "text") {
                console.log("text", item.data);
            } else if (item.type === "file" && typeof item.data !== "string") {
                console.log("File type", getClipboardFileType(item.data));
                console.log("File name", item.data.name);
            }
        }
    };

    useEffect(() => {
        document.body.addEventListener("paste", onPaste);

        return () => {
            document.body.removeEventListener("paste", onPaste);
        };
    }, []);

    return {items};
};

export default useClipSense;