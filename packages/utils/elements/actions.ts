import { useEffect } from 'react';
import rspc from '../query';
import { useElementStore } from './state';

const useGetElements = () => {
	const setElements = useElementStore((state) => state.setElements);
	const { data, refetch } = rspc.useQuery(['elements.get']);

	useEffect(() => {
		if (data) {
			setElements(JSON.stringify(data) as any);
		}
	}, [data]);

	return { refetch };
};

export default useGetElements;
