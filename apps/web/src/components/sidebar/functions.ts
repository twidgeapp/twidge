import { Spaces } from '@twidge/utils';
import rspc from '@twidge/utils/query';
import useSpaceStore from '@twidge/utils/spaces/state';
import { DropResult } from 'react-beautiful-dnd';

const useOnDragEnd = () => {
	const spaces = useSpaceStore((state) => state.spaces);
	const setSpaces = useSpaceStore((state) => state.setSpaces);
	const { mutate } = rspc.useMutation('spaces.updateSpaceIndexes');
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		if (!destination) return;

		const { index: destIndex } = destination;
		const { index: sourceIndex } = source;

		const newSpaces = Array.from(spaces);
		const [removed] = newSpaces.splice(Number(sourceIndex), 1);
		newSpaces.splice(Number(destIndex), 0, removed);
		setSpaces(newSpaces);

		mutate({
			spaces: newSpaces as Spaces[],
		});
	};

	return { onDragEnd };
};

export { useOnDragEnd };
