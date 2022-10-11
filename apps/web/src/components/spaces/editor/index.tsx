import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { useEffect } from "react";
import Header from "@editorjs/header";
import "./editor.css";

const Editor = () => {
    const editorConfig: EditorConfig = {
        readOnly: false,
        holder: "editorjs",

        tools: {
            header: {
                class: Header,
                inlineToolbar: ["marker", "link"],
                config: {
                    placeholder: "Header",
                },
                shortcut: "CMD+SHIFT+H",
            },
        },
        defaultBlock: "paragraph",

        onChange: function (api, event) {
            console.log("something changed", event);
        },
    };

    useEffect(() => {
        new EditorJS(editorConfig);
    }, []);

    return <div id="editorjs"></div>;
};

export default Editor;
