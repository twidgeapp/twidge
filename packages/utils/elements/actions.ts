import { invoke } from '@tauri-apps/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useElementStore } from './state';

const useGetElements = () => {
	const { id } = useParams();
	const setElements = useElementStore((state) => state.setElements);
	useEffect(() => {
		invoke('get_elements', {}).then((elements) => {
			setElements(elements);
		});
	}, []);
};

export default useGetElements;
