import * as Icons from '@tabler/icons';
import StateContext from '@twidge/utils/state';
import React, {useContext} from 'react';
import {trpc} from '../../../utils/trpc';
import ColorPicker from './color-picker';
import Popover from '@twidge/components/popover';

const NewProject = () => {
    const [accent, setAccent] = React.useState(0);
    const [primary, setPrimary] = React.useState(214);
    const [icon, setIcon] = React.useState('Icon2fa');
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const {mutate} = trpc.spaces.create.useMutation();
    const {spaces} = useContext(StateContext);

    const createSpace = () => {
        spaces.addSpace({
            name,
            description,
            icon,
            colors: {
                iconColor: '123123',
                primaryColor: primary,
                accentColor: accent,
            },
            id: 'undefined-123',
            createdAt: new Date(),
            updatedAt: new Date(),
            ownerId: '',
            plan: 'FREE',
        });

        mutate(
            {
                name,
                description,
                icon,
                color: {
                    iconColor: '123123',
                    primaryColor: primary,
                    accentColor: accent,
                },
            },
            {
                onSuccess: (space) => {
                    console.log(space, spaces);
                    spaces.removeSpace('undefined-123');
                    spaces.addSpace(space);
                    document.getElementById('close-button-modal')?.click();
                },
            }
        );
    };

    return (
        <div className="w-full h-full pt-4">
            <div className="w-full h-full flex flex-col justify-center items-start gap-3">
                <div className="flex items-center gap-2 w-full">
                    <Popover>

                    </Popover>
                    <div
                        className="min-w-[32px] w-8 h-8 rounded-lg bg-app-sidebar-background border border-text/10 grid place-items-center cursor-pointer">
                        <Icons.Icon2fa size={20} color={'#123123'}/>
                    </div>
                    <input
                        onInput={(e) => setName(e.currentTarget.value)}
                        placeholder="Name"
                        className="w-full h-8 rounded-md bg-app-sidebar-background border border-text/10 focus:outline-none px-2 text-sm focus:ring-2 focus:ring-text-text"
                    />
                </div>

                <input
                    onInput={(e) => setDescription(e.currentTarget.value)}
                    placeholder="Description"
                    className="w-full h-8 rounded-md bg-app-sidebar-background border border-text/10 focus:outline-none px-2 text-sm focus:ring-2 focus:ring-text-text"
                />
                <div className="flex flex-col w-full">
                    <h1 className="text-base font-bold">Colors</h1>
                    <div className="grid grid-cols-2 w-full gap-2 pt-1">
                        <ColorPicker
                            color={primary}
                            setColor={setPrimary}
                            text="Primary"
                        />
                        <ColorPicker
                            color={accent}
                            setColor={setAccent}
                            text="Accent"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <button
                        onClick={createSpace}
                        className="bg-buttons-background px-5 py-1 rounded-lg hover:bg-buttons-hover transition-all duration-150 text-sm text text-buttons-text border border-buttons-text"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewProject;
