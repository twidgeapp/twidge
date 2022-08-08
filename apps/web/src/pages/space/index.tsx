import useSpaceStore from '@twidge/utils/spaces/state';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import SpaceLayout from '../../layouts/space/layout';
import Body from './components/body';
import SpaceCtx from './ctx';

const SpacePage = () => {
	const { id } = useParams();
	const spaces = useSpaceStore((spaces) => spaces.spaces);
	const currentSpace = useMemo(() => {
		return spaces.filter((space) => space.id === parseInt(id as any))[0];
	}, [spaces]);

	return (
		<SpaceCtx.Provider value={{ currentSpace: currentSpace }}>
			<SpaceLayout animate={false}>
				<Body />
			</SpaceLayout>
		</SpaceCtx.Provider>
	);
};

export default SpacePage;
