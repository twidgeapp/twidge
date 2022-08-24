import React from 'react';
import Sidebar from '../../components/sidebar';
import { Root } from './styles';

// eslint-disable-next-line react/display-name
const SpaceLayout = React.forwardRef(
	(
		props: {
			children: React.ReactNode;
			animate: boolean;
		},
		ref: React.Ref<HTMLDivElement>
	) => {
		return (
			<Root
				ref={ref}
				initial={{ opacity: props.animate ? 0 : 1 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Sidebar />
				{props.children}
			</Root>
		);
	}
);

export default SpaceLayout;
