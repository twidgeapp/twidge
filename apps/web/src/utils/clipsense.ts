import {useEffect} from "react";
import rspc from "@twidge/core/query";
import {useParams} from "react-router";

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
                data: text,
            });
        } else if (item.kind === "file") {
            // get the file
            const file = item.getAsFile();
            if (!file) return;
            clipBoardItems.push({
                type: "file",
                data: file,
            });
        }
    }
    return clipBoardItems;
};

const getClipboardFileType = (file: File) => {
    let fileType = file.type;
    console.log(fileType)
    if (fileType.includes("image")) {
        fileType = fileType.replace("image/", "");
        // svg
        fileType = fileType.replace("+xml", "");
        return {
            type: "image",
            fileType,
        };
    } else if (fileType.includes("video")) {
        fileType = fileType.replace("video/", "");
        return {
            type: "video",
            fileType,
        };
    } else if (fileType.includes("audio")) {
        fileType = fileType.replace("audio/", "");
        return {
            type: "audio",
            fileType,
        };
    } else {
        return {
            type: "file",
            fileType,
        };
    }
};

/**
 * Adds a paste event listener to the document
 * Infers the type of the clipboard data and returns it
 */
const useClipSense = ({refetch}: { refetch: () => void }) => {
    const mutations = rspc.useMutation("whiteboard.items.create")
    const params = useParams();

    const onPaste = (e: ClipboardEvent) => {
        let clipBoardItems = getClipboardData(e);
        if (!clipBoardItems) return;

        // remove duplicates from clipBoardItems
        clipBoardItems = clipBoardItems.filter((item, index) => {
            if (!clipBoardItems) return;
            return clipBoardItems.findIndex((i) => i.data === item.data) === index;
        });

        for (const item of clipBoardItems) {
            if (item.type === "text" && typeof item.data === "string") {
                console.log("text", item.data);
                mutations.mutate({
                    whiteboard_id: parseInt(params.id!),
                    data: item.data,
                    type: "text"
                }, {
                    onSuccess: () => {
                        refetch()
                    }
                })

            } else if (item.type === "file") {
                if (item.data instanceof File) {
                    const reader = new FileReader();
                    reader.readAsDataURL(item.data);
                    reader.onload = () => {
                        if (!reader.result) return;

                        mutations.mutate({
                            whiteboard_id: parseInt(params.id!),
                            data: reader.result.toString(),
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            type: getClipboardFileType(item.data).fileType
                        }, {
                            onSuccess: () => {
                                refetch()
                            }
                        })
                    }

                    console.log("File name", item.data.name);
                }
            }
        }
    };

    useEffect(() => {
        document.body.addEventListener("paste", onPaste);

        return () => {
            document.body.removeEventListener("paste", onPaste);
        };
    }, []);

    return {};
};

export default useClipSense;
