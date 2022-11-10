import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import "./animations.css"

interface Props {
    children: React.ReactNode[]
}

const PopoverDemo = (props: Props) => (
    <div className="relative z-20">
        <Popover.Root>
            <Popover.Trigger>
                {props.children[0]}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className='slideUpAndFade-enter text-white relative z-20' sideOffset={10}>
                    {props.children[1]}
                    <Popover.Close className="PopoverClose" aria-label="Close">
                    </Popover.Close>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    </div>
);

export default PopoverDemo;