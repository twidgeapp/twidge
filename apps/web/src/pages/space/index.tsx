import useSpaceStore from '@twidge/utils/spaces/state';
import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import SpaceLayout from '../../layouts/space/layout';
import Body from './components/body';
import SpaceCtx from './ctx';
import getClipboardData from './functions/clipboard';
import useGetElements from '@twidge/utils/elements/actions';
import rspc from '@twidge/utils/query';

const SpacePage = () => {
	const { id } = useParams();
	const spaces = useSpaceStore((spaces) => spaces.spaces);
	const currentSpace = useMemo(() => {
		return spaces.filter((space) => space.id === parseInt(id as string))[0];
	}, [spaces]);
	const spaceRef = useRef<HTMLDivElement>(null);

	const { refetch } = useGetElements();
	const mutation = rspc.useMutation('elements.create');

	useEffect(() => {
		const onPaste = async (ev: ClipboardEvent) => {
			console.log(ev);
			getClipboardData(ev, parseInt(id as string), mutation, refetch);
		};

		spaceRef.current?.addEventListener('paste', onPaste);

		return () => {
			spaceRef.current?.removeEventListener('paste', onPaste);
		};
	}, [refetch]);

	return (
		<SpaceCtx.Provider value={{ currentSpace: currentSpace }}>
			<SpaceLayout ref={spaceRef} animate={false}>
				<Body />
			</SpaceLayout>
		</SpaceCtx.Provider>
	);
};

export default SpacePage;
