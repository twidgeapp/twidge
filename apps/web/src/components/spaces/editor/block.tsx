import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
const EditorBlock = ({
    propBlock,
    addBlockHandler,
    onChangeHandler,
}: {
    propBlock: { tag: string; id: string; html: string };
    addBlockHandler: (currentBlock: any) => void;
    onChangeHandler: (currentBlock: any) => void;
}) => {
    const contentEditableRef = useRef<HTMLDivElement>();
    const [block, setBlock] = useState(propBlock);

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addBlockHandler({
                ref: contentEditableRef.current,
                id: block.id,
            });
        }
    };

    return (
        <ContentEditable
            onKeyDown={handleKeyDown}
            className="px-2 mx-4 my-3 outline-none focus:outline-dark-gray5 rounded-xl py-2 bg-dark-gray1"
            innerRef={contentEditableRef as any}
            html={block.html}
            disabled={false}
            onChange={() => {
                if (!contentEditableRef.current) return;
                let tagType = contentEditableRef.current.tagName.toLowerCase();

                if (contentEditableRef.current.innerHTML.startsWith("#")) {
                    const hashtags =
                        contentEditableRef.current.innerHTML.match(
                            /#/g
                        )?.length;

                    if (!hashtags) return;
                    if (hashtags <= 6) tagType = `h${hashtags}`;
                }
                const newBlock = {
                    ...block,
                    tag: tagType,
                    html: contentEditableRef.current.innerHTML,
                };
                setBlock(newBlock);
                onChangeHandler(newBlock);
            }}
            tagName={block.tag}
        ></ContentEditable>
    );
};

export default EditorBlock;
