/* eslint-disable @typescript-eslint/ban-ts-comment */
import Root, { Divider, MainSection, StyledSpace, ThemeButton } from './styles';
import useSpaceStore from '@twidge/utils/spaces/state';
import { Space as TSpace } from '@twidge/utils/spaces/types';
import * as Icons from '@fluentui/react-icons';
import { useOnDragEnd } from './functions';
import Logo from '../../assets/space/sidebar/logo.svg';
import { Link, useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import '../../styles/tippy.css'; // optional
import useGetSpaces from '@twidge/utils/spaces/actions';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import rspc from '@twidge/utils/query';
import { useTheme } from 'next-themes';
import ThemeIcon from './icon';

const Space = ({ space, index }: { space: TSpace; index: number }) => {
	const spaces = useSpaceStore((state) => state.spaces);
	const { id } = useParams();
	// @ts-ignore
	const Icon = Icons[space.icon];

	return (
		<Link to={`/spaces/${space.id}`}>
			<Tippy content={space.name} placement="right" arrow={false}>
				<StyledSpace
					id={space.id.toString()}
					css={{
						marginBottom: index == spaces.length - 1 ? '0px' : '12px',
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
	const { refetch } = useGetSpaces();
	const { onDragEnd } = useOnDragEnd();
	const mutation = rspc.useMutation('spaces.create');
	const { theme, setTheme } = useTheme();
	const themes = ['macchiato', 'frappe', 'mocha', 'latte'];
	const nextTheme = themes[(themes.indexOf(theme as any) + 1) % themes.length];

	return (
		<Root>
			<MainSection>
				<img src={Logo} />
				<Tippy content={'Add'} placement="right" arrow={false}>
					<StyledSpace
						onClick={() => {
							mutation.mutate(undefined, {
								onError: (error) => {
									throw new Error(error.message);
								},
								onSuccess: () => {
									refetch();
								},
							});
						}}
					>
						<Icons.Add20Regular style={{ color: 'var(--colors-lavender)' }} />
					</StyledSpace>
				</Tippy>
				{spaces.length > 0 && <Divider />}
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="droppable">
						{(provided) => (
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
								}}
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{spaces.map((space, index) => {
									return (
										<Draggable
											key={space.id}
											draggableId={space.id.toString()}
											index={index}
										>
											{(provided) => (
												<div
													key={space.id}
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
												>
													<Space index={index} space={space} key={space.id} />
												</div>
											)}
										</Draggable>
									);
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
				<Divider />
				<Tippy content={'Settings'} placement="right" arrow={false}>
					<StyledSpace>
						<Icons.Settings16Filled style={{ color: 'var(--colors-blue)' }} />
					</StyledSpace>
				</Tippy>
			</MainSection>
			<ThemeButton
				onClick={() => {
					setTheme(nextTheme);
				}}
			>
				<ThemeIcon nextTheme={nextTheme} />
			</ThemeButton>
		</Root>
	);
};

export default Sidebar;
