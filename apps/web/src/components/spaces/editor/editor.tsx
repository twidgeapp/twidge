// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import EditorJS, { EditorConfig } from "@editorjs/editorjs";
import { useEffect } from "react";
import Header from "@editorjs/header";
import "./editor.css";
import CodeTool from "@editorjs/code";
import QouteTool from "@editorjs/quote";
import InlineCodeTool from "@editorjs/inline-code";
import EmbedTool from "@editorjs/embed";
import ParagraphTool from "@editorjs/paragraph";
import ListTool from "@editorjs/nested-list";
import TableTool from "@editorjs/table";
import rspc from "@twidge/core/query";
import { useState } from "react";

const Editor = ({ content }: { content: string }) => {
    const notesEditMutation = rspc.useMutation(["notes.edit"]);

    const [editor, setEditor] = useState();

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
            code: CodeTool,
            qoute: QouteTool,
            inlineCode: {
                class: InlineCodeTool,
                shortcut: "CMD+SHIFT+M",
            },
            embed: EmbedTool,
            paragraph: {
                class: ParagraphTool,
                inlineToolbar: true,
            },
            list: {
                class: ListTool,
                inlineToolbar: true,
                config: {
                    defaultStyle: "unordered",
                },
            },
            table: {
                class: TableTool,
                inlineToolbar: true,
                config: {
                    rows: 2,
                    cols: 3,
                },
            },
        },
        defaultBlock: "paragraph",
        placeholder: "Let's write something insane!",
        onChange: function (api, event) {
            // get all blocks data
            api.saver.save().then((value) => {
                notesEditMutation.mutate(
                    {
                        id: note.id,
                        content: JSON.stringify(value),
                        title: note.title,
                    },
                    {
                        onError: () => {
                            console.log("error");
                        },
                        onSuccess: () => {
                            console.log("success");
                        },
                    }
                );
            });
            // console.log("something changed", event);
        },
        data: JSON.parse(content ?? {}),
    };

    useEffect(() => {
        const editorjs = new EditorJS(editorConfig);
        setEditor(editorjs);
    }, []);

    return <div id="editorjs"></div>;
};

export default Editor;
