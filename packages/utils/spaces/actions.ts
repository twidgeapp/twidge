import { invoke } from '@tauri-apps/api';
import { listen } from '@tauri-apps/api/event';
import { useEffect } from 'react';
import useSpaceStore from './state';
import { Space } from './types';

const useGetSpaces = () => {
	const setSpaces = useSpaceStore((spaces) => spaces.setSpaces);
	const addSpace = useSpaceStore((spaces) => spaces.addSpace);
	const send = () => invoke('get_spaces');

	useEffect(() => {
		send().then((spaces: any) => {
			setSpaces(spaces);
		});

		listen('new_space', (ev) => {
			const json: Space = JSON.parse(ev.payload as any);
			addSpace(json);
		});
	}, []);

	return [send];
};

export default useGetSpaces;
