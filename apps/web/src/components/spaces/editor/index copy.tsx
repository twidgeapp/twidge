import { useState } from "react";
import EditorBlock from "./block";

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const initialBlock = { id: uid(), html: "", tag: "p" };

const Editor = () => {
    const [blocks, setBlocks] = useState([initialBlock]);

    const onChangeHandler = (updatedBlock: any) => {
        const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
        const updatedBlocks = [...blocks];
        updatedBlocks[index] = {
            ...updatedBlocks[index],
            tag: updatedBlock.tag,
            html: updatedBlock.html,
        };

        setBlocks(updatedBlocks);
    };

    const addBlockHandler = (currentBlock: any) => {
        const newBlock = { id: uid(), html: "", tag: "p" };
        setBlocks((prev) => {
            const index = prev.findIndex((e) => e.id === currentBlock.id);
            const newBlocks = [...prev];
            newBlocks.splice(index + 1, 0, newBlock);
            return newBlocks;
        });
        setTimeout(() => {
            currentBlock.ref.nextElementSibling.focus();
        }, 150);
    };

    return (
        <div>
            {blocks.map((block, key) => {
                return (
                    <EditorBlock
                        onChangeHandler={onChangeHandler}
                        addBlockHandler={addBlockHandler}
                        propBlock={block}
                        key={key}
                    />
                );
            })}
        </div>
    );
};

export default Editor;
