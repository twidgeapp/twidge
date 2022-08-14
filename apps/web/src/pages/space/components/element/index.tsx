import { Element as TElement } from '@twidge/utils/elements/types';
import Image from './image';
import Text from './text';

const Element = (element: TElement) => {
	if (element.elementType === 'text') {
		return <Text content={element.content} />;
	} else if (element.elementType === 'image') {
		return <Image content={element.content} />;
	}
	return <></>;
};

export default Element;
