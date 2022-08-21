import { invoke } from '@tauri-apps/api';
import { listen } from '@tauri-apps/api/event';
import { useEffect } from 'react';
import rspc from '../query';
import useSpaceStore from './state';
import { Space } from './types';

const useGetSpaces = () => {
	const setSpaces = useSpaceStore((spaces) => spaces.setSpaces);
	const addSpace = useSpaceStore((spaces) => spaces.addSpace);
	const { data } = rspc.useQuery(['getSpaces']);

	useEffect(() => {
		if (data) {
			setSpaces(data);
		}
	}, [data]);

	useEffect(() => {
		listen('new_space', (ev) => {
			const spaces = useSpaceStore.getState().spaces;
			const json: Space = JSON.parse(ev.payload as any);
			// check if the space is already in the store
			const space = spaces.find((s) => s.id === json.id);
			if (!space) {
				addSpace(json);
			}
		});
	}, []);
};

export default useGetSpaces;
