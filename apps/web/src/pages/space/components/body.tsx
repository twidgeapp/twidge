import { useContext } from 'react';
import SpaceCtx from '../ctx';
import Header from './header';

const Body = () => {
	const { currentSpace } = useContext(SpaceCtx);

	return (
		<>
			<Header />
		</>
	);
};

export default Body;
