import React from "react"
import * as DialogPrimitives from "@radix-ui/react-dialog"
import "./animations.css"

interface Props {
    children: React.ReactNode[]
}

const ModalComponent = (props: Props) => {
    return (
        <DialogPrimitives.Root>
            <DialogPrimitives.Trigger asChild>
                {props.children[0]}
            </DialogPrimitives.Trigger>
            <DialogPrimitives.Portal>
                <DialogPrimitives.Overlay className="bg-dark-gray2 fixed inset-0 animateOverlayShow bg-opacity-90" />
                <DialogPrimitives.Content className="bg-dark-gray3 bg-opacity-10 border border-dark-gray4 shadow-2xl animateContentShow left-1/2 top-1/2 fixed rounded-xl backdrop-blur-2xl pb-5 z-10" style={{
                    scale: 0.5,
                }}>
                    {props.children[1]}
                </DialogPrimitives.Content>
            </DialogPrimitives.Portal>
        </DialogPrimitives.Root >
    )
}

export default ModalComponent