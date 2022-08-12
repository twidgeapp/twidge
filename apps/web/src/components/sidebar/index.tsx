/* eslint-disable @typescript-eslint/ban-ts-comment */
import Root, { Divider, MainSection, StyledSpace } from './styles';
import useSpaceStore from '@twidge/utils/spaces/state';
import { Space as TSpace } from '@twidge/utils/spaces/types';
import { useEffect } from 'react';
import * as Icons from '@fluentui/react-icons';
import Logo from '../../assets/space/sidebar/logo.svg';
import { Link, useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import '../../styles/tippy.css'; // optional
import useGetSpaces from '@twidge/utils/spaces/actions';
import { invoke } from '@tauri-apps/api';

const Space = ({ space }: { space: TSpace }) => {
	const { id } = useParams();
	// @ts-ignore
	const Icon = Icons[space.icon];

	return (
		<Link to={`/spaces/${space.id}`}>
			<Tippy content={space.name} placement="right" arrow={false}>
				<StyledSpace
					id={space.id.toString()}
					css={{
						border:
							space.id === parseInt(id as any)
								? '1px solid $surface1'
								: '0px solid $surface1',
					}}
				>
					<Icon color={space.color} />
				</StyledSpace>
			</Tippy>
		</Link>
	);
};

const Sidebar = () => {
	const spaces = useSpaceStore((spaces) => spaces.spaces);
	useGetSpaces();

	return (
		<Root>
			<MainSection>
				<img src={Logo} />
				<Tippy content={'Add'} placement="right" arrow={false}>
					<StyledSpace
						onClick={() => {
							invoke('create_space');
						}}
					>
						<Icons.Add20Regular style={{ color: 'var(--colors-lavender)' }} />
					</StyledSpace>
				</Tippy>
				<Divider />
				{spaces.map((space) => {
					return (
						<div key={space.id}>
							<Space space={space} key={space.id} />
						</div>
					);
				})}
				<Divider />
				<Tippy content={'Settings'} placement="right" arrow={false}>
					<StyledSpace>
						<Icons.Settings16Filled style={{ color: 'var(--colors-blue)' }} />
					</StyledSpace>
				</Tippy>
			</MainSection>
		</Root>
	);
};

export default Sidebar;
