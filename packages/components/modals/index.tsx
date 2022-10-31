import { Transition } from '@headlessui/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons';
import React, { Fragment } from 'react';

interface Props {
    title: string;
    description?: string;
    children: React.ReactNode[];
}

const Dialog = (props: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
            <DialogPrimitive.Trigger asChild>
                {props.children[0]}
            </DialogPrimitive.Trigger>
            <Transition.Root show={isOpen}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <DialogPrimitive.Overlay
                        forceMount
                        className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
                    />
                </Transition.Child>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-10 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <DialogPrimitive.Content
                        forceMount
                        className="fixed z-50 w-[95vw] max-w-md rounded-lg p-4 md:w-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] focus:outline-none bg-modal-background py-5 px-5 text-text"
                    >
                        <DialogPrimitive.Title className="text-2xl font-bold">
                            {props.title}
                        </DialogPrimitive.Title>
                        {props.description && (
                            <DialogPrimitive.Description className="mt-2 text-sm font-"></DialogPrimitive.Description>
                        )}
                        {props.children[1]}

                        <DialogPrimitive.Close
                            id="close-button-modal"
                            className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none"
                        >
                            <IconX className="h-4 w-4 text-gray-500 hover:text-gray-700" />
                        </DialogPrimitive.Close>
                    </DialogPrimitive.Content>
                </Transition.Child>
            </Transition.Root>
        </DialogPrimitive.Root>
    );
};

export default Dialog;
