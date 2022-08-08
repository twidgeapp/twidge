import create from 'zustand';
import Spaces, { Space } from './types';

interface ISpaceStore {
	spaces: Spaces;
	addSpace: (space: Space) => void;
	removeSpace: (id: number) => void;
	setSpaces: (spaces: Spaces) => void;
}

const useSpaceStore = create<ISpaceStore>((set) => ({
	spaces: [
		{
			id: 1,
			name: 'Space 1',
			color: '#89B4FA',
			icon: 'PhoneLaptop16Filled',
		},
		{
			id: 2,
			name: 'Document',
			color: '#F5C2E7',
			icon: 'Document16Filled',
		},
	],

	addSpace: (space: Space) =>
		set((state) => ({
			spaces: [space, ...state.spaces],
			addSpace: state.addSpace,
			removeSpace: state.removeSpace,
			setSpaces: state.setSpaces,
		})),

	removeSpace: (id: number) =>
		set((state) => ({
			spaces: state.spaces.filter((space) => space.id !== id),
			removeSpace: state.removeSpace,
			setSpaces: state.setSpaces,
			addSpace: state.addSpace,
		})),

	setSpaces: (spaces: Spaces) =>
		set((state) => ({
			spaces: spaces,
			removeSpace: state.removeSpace,
			setSpaces: state.setSpaces,
			addSpace: state.addSpace,
		})),
}));

export default useSpaceStore;
