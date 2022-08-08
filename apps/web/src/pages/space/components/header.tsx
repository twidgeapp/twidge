import {
	Filter20Filled,
	Search20Filled,
	Settings20Filled,
} from '@fluentui/react-icons';
import { styled } from '@twidge/config/stitches.config';
import { useContext } from 'react';
import SpaceCtx from '../ctx';
import ThreeDots from './icons/threedots';

const StyledHeader = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '12px',
	gap: '12px',
	height: 'fit-content',
	width: '100%',

	borderBottom: '1px solid $surface1',

	'.header': {
		fontFamily: 'Open Sans',
		fontWeight: 800,
		fontSize: '18px',
		lineHeight: '25px',
	},

	'.controls': {
		display: 'flex',
		gap: '10px',
		'.button': {
			backgroundColor: 'transparent',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '12px',
			gap: '12px',

			width: '44px',
			height: '44px',
			border: '1px solid $surface1',
			borderRadius: '8px',
			color: '$blue',
			transition: 'all 0.2s ease-in-out',
			cursor: 'pointer',
			'&:hover': {
				backgroundColor: '$surface1',
			},
		},
	},
});

const Header = () => {
	const { currentSpace } = useContext(SpaceCtx);
	return (
		<StyledHeader>
			<h1 className="header">{currentSpace?.name}</h1>
			<div className="controls">
				<button className="button">
					<Filter20Filled />
				</button>
				<button className="button">
					<Search20Filled />
				</button>
				<button className="button">
					<Settings20Filled />
				</button>
				<button className="button">
					<ThreeDots />
				</button>
			</div>
		</StyledHeader>
	);
};

export default Header;
