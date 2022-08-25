import create from 'zustand';
import { ElementState } from './types';

export const useElementStore = create<ElementState>((set) => ({
	elements: [],

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
				elements: JSON.parse(elements as string),
			};
		});
	},
}));
