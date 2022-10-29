import tw from "tailwind-styled-components";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import React from "react";
import { IconX } from "@tabler/icons";

interface Props {
    children: React.ReactNode[];
    isOpen?: boolean;
    trigger?: boolean;
    restoreColors?: boolean;
}

const StyledOverlay = tw(
    DialogPrimitives.Overlay
)`bg-app-bg/40 backdrop-blur-sm w-screen h-screen  absolute top-0 modal-overlay-animation`;
const StyledComponent = tw(
    DialogPrimitives.Content
)`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 modal-content-animation focus-none`;

const CloseIcon = tw(DialogPrimitives.Close)`absolute top-3 right-3 text-text`;

const DialogComponent = (props: Props) => {
    return (
        <DialogPrimitives.Root open={props.isOpen} modal={true}>
            {props.trigger && (
                <DialogPrimitives.Trigger className="focus:outline-none bg-transparent">
                    {props.children[0]}
                </DialogPrimitives.Trigger>
            )}
            <DialogPrimitives.Portal>
                <StyledOverlay style={{ filter: "blur(10px)" }} />
                {/* @ts-ignore */}
                <StyledComponent className="focus:outline-none">
                    <>
                        {props.children[1]}
                        {props.trigger && (
                            <CloseIcon
                                id="close-button-modal"
                                onClick={() => {
                                    if (props.restoreColors) {
                                        document.body.style.setProperty(
                                            "--primary",
                                            "192"
                                        );
                                        document.body.style.setProperty(
                                            "--accent",
                                            "298"
                                        );
                                    }
                                }}
                                className="backdrop-blur-0"
                            >
                                <IconX />
                            </CloseIcon>
                        )}
                    </>
                </StyledComponent>
            </DialogPrimitives.Portal>
        </DialogPrimitives.Root>
    );
};

export default DialogComponent;
