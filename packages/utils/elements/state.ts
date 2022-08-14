import create from 'zustand';
import { ElementState } from './types';

export const useElementStore = create<ElementState>((set) => ({
	elements: [
		{
			content:
				'Twidge is an open-source productivity app which helps you manage link embeds, tasks, calendars and many more',
			elementType: 'text',
			id: 1,
			positionX: 0,
			positionY: 0,
			spaceId: 1,
		},
		{
			content: 'https://avatars.githubusercontent.com/u/77481923',
			elementType: 'image',
			id: 2,
			positionX: 100,
			positionY: 100,
			spaceId: 1,
		},
	],

	addElement: (element) => {
		set((state) => {
			return {
				addElement: state.addElement,
				removeElement: state.removeElement,
				setElements: state.setElements,
				elements: [...state.elements, element],
			};
		});
	},
	removeElement: (id) => {
		set((state) => {
			return {
				addElement: state.addElement,
				removeElement: state.removeElement,
				setElements: state.setElements,
				elements: state.elements.filter((element) => element.id !== id),
			};
		});
	},
	setElements: (elements) => {
		set((state) => {
			return {
				addElement: state.addElement,
				removeElement: state.removeElement,
				setElements: state.setElements,
				elements: elements,
			};
		});
	},
}));
