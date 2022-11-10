import { useState } from "react"
import React, { useEffect } from "react";
import { Notes } from "@twidge/utils/bindings";
import rspc from "@twidge/core/query";

interface Props {
    note: Notes
    editorRef: React.RefObject<HTMLDivElement>;
}

const Title = (props: Props) => {
    const [title, setTitle] = useState(props.note.title);
    const editorMutation = rspc.useMutation(["notes.edit"]);

    useEffect(() => {
        if (title.length <= 1) {
            editorMutation.mutate({
                id: props.note.id,
                title: `Note ${props.note.id}`,
                content: props.note.content,
            });
        }
        document.getElementById("SIDEBAR-NOTES")?.dispatchEvent(new CustomEvent("refetch"))

    }, [title]);

    return (
        <div className="w-full flex items-center justify-center px-9 mb-4">
            <input
                className="w-full text-4xl bg-transparent selection:bg-gray-200 focus:outline-none selection:text-black"
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value);

                    editorMutation.mutate({
                        id: props.note.id,
                        title: title,
                        content: props.note.content,
                    });
                }}
            />
        </div>
    );
}

export default Title;