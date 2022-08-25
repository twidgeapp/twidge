import { Element as TElement } from '@twidge/utils/elements/types';
import Image from './image';
import Text from './text';

const Element = (element: TElement) => {
	if (element.elementType === 'text') {
		return <Text {...element} />;
	} else if (element.elementType.startsWith('image')) {
		return <Image content={element.content} />;
	}
	return <></>;
};

export default Element;
