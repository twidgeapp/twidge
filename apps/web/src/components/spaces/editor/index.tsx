// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./editor.css";
import { useSelector } from "@twidge/core/state";
import { useMemo } from "react";
import { useParams } from "react-router";
import Editor from "./editor";
import { Notes } from "@twidge/utils/bindings";
import Title from "./title";
import { useRef } from "react"

const EditorPage = () => {
    const notes = useSelector((state) => state.notes.notes);
    const params: any = useParams();
    const editorRef = useRef<HTMLDivElement>(null);
    const note = useMemo((): Notes => {
        if (!params || !notes) return;

        return notes.find((note) => note.id === parseInt(params.noteId));
    }, [notes, params]);

    if (note) {
        return (
            <div className="flex items-center justify-center">
                <div className="max-w-3xl w-full h-full flex flex-col items-center">
                    <Title editorRef={editorRef} note={note} />
                    <div className="w-full">
                        <Editor ref={editorRef} content={note.content} />
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default EditorPage;
