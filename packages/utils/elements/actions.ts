import { invoke } from '@tauri-apps/api';
import { listen } from '@tauri-apps/api/event';
import { useEffect } from 'react';
import { useElementStore } from './state';
import { Element } from './types';

const useGetElements = () => {
	const setElements = useElementStore((state) => state.setElements);
	const addElement = useElementStore((state) => state.addElement);

	useEffect(() => {
		listen('create-element', (element) => {
			console.log(element);
			const payload: Element = JSON.parse(element.payload as any);
			addElement(payload);
		});

		invoke('get_elements', {}).then((elements: any) => {
			setElements(elements);
		});
	}, []);
};

export default useGetElements;
