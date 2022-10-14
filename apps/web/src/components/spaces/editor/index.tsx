// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./editor.css";
import { useSelector } from "@twidge/core/state";
import { useMemo } from "react";
import { useParams } from "react-router";
import Editor from "./editor";

const EditorPage = () => {
    const notes = useSelector((state) => state.notes.notes);
    const params: any = useParams();
    const note = useMemo(() => {
        if (!params || !notes) return;

        return notes.find((note) => note.id === parseInt(params.noteId));
    }, [notes, params]);

    if (note) {
        return <Editor content={note.content} />;
    } else {
        return <></>;
    }
};

export default EditorPage;
