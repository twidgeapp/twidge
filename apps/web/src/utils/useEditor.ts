import { EditorState, RichUtils } from "draft-js";
import React from "react";

const useDraftJSEditor = () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    const makeBold = () => {
        setEditorState((editorState) =>
            RichUtils.toggleInlineStyle(editorState, "")
        );
    };

    return { editorState, setEditorState, makeBold };
};

export default useDraftJSEditor;
