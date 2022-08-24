export interface Element {
	id: number;
	elementType: string;
	content: string;
	spaceId: number;
	positionX: number;
	positionY: number;
}

export interface ElementState {
	elements: Element[];
	addElement: (element: Element) => void;
	removeElement: (id: number) => void;
	setElements: (elements: string) => void;
}
