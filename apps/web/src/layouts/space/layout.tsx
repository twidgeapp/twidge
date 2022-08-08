import React from 'react';
import Sidebar from '../../components/sidebar';
import { Root } from './styles';

const SpaceLayout = ({
	animate,
	children,
}: {
	animate: boolean;
	children: React.ReactNode;
}) => {
	return (
		<Root
			initial={{ opacity: animate ? 0 : 1 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Sidebar />
			{children}
		</Root>
	);
};

export default SpaceLayout;
