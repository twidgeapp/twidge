import { useEffect } from 'react';
import rspc from '../query';
import useSpaceStore from './state';

const useGetSpaces = () => {
	const setSpaces = useSpaceStore((spaces) => spaces.setSpaces);
	const { data, refetch } = rspc.useQuery(['spaces.get']);

	useEffect(() => {
		if (data) {
			setSpaces(data);
		}
	}, [data]);

	return { refetch };
};

export default useGetSpaces;
