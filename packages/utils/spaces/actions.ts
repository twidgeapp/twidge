import { invoke } from '@tauri-apps/api';
import { useEffect } from 'react';
import useSpaceStore from './state';

const useGetSpaces = () => {
	const setSpaces = useSpaceStore((spaces) => spaces.setSpaces);
	const send = () => invoke('get_spaces');

	useEffect(() => {
		const interval = setInterval(() => {
			send().then((spaces: any) => {
				setSpaces(spaces);
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	return [send];
};

export default useGetSpaces;
