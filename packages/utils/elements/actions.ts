import { invoke } from '@tauri-apps/api';
import { listen } from '@tauri-apps/api/event';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useElementStore } from './state';
import { Element } from './types';

const useGetElements = () => {
	const { id } = useParams();
	const setElements = useElementStore((state) => state.setElements);
	const addElement = useElementStore((state) => state.addElement);

	useEffect(() => {
		listen('create-element', (element) => {
			console.log(element);
			const payload: Element = JSON.parse(element.payload as any);
			addElement(payload);
		});

		invoke('get_elements', {}).then((elements) => {
			setElements(elements);
		});
	}, []);
};

export default useGetElements;
