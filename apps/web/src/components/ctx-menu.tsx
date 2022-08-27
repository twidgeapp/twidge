import { styled } from '@twidge/config/stitches.config';
import React, { useEffect, useMemo } from 'react';
import {
	ContextMenuItem,
	ContextMenuSubTrigger,
	ContextMenuSub,
	ContextMenuContent,
	ContextMenuCheckboxItem,
	ContextMenuItemIndicator,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuSubContent,
} from '@twidge/components/context-menu';
import {
	Check20Filled,
	Checkmark16Filled,
	TicketDiagonal20Filled,
} from '@fluentui/react-icons';
import useSpaceStore from '@twidge/utils/spaces/state';
import { useNavigate, useParams } from 'react-router-dom';

const RightSlot = styled('div', {
	marginLeft: 'auto',
	paddingLeft: 20,
	color: 'white',
	'[data-highlighted] > &': { color: 'white' },
	'[data-disabled] &': { color: '$inactiveBorderColor' },
});

export const SpaceCtxMenu = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const spaces = useSpaceStore((state) => state.spaces);
	const currentSpace = useMemo(() => {
		return spaces.filter((space) => space.id === parseInt(id as string))[0];
	}, [spaces]);
	const [space, setSpace] = React.useState(currentSpace?.name ?? null);

	useEffect(() => {
		const v = spaces.filter((s) => s.name === space)[0];
		if (v) {
			navigate(`/spaces/${v.id}`);
		}
	}, [space]);

	return (
		<ContextMenuContent sideOffset={5} align="end">
			<ContextMenuItem
				onClick={() => {
					window.history.back();
				}}
			>
				<ContextMenuItemIndicator>
					<TicketDiagonal20Filled />
				</ContextMenuItemIndicator>
				Back <RightSlot>⌘+[</RightSlot>
			</ContextMenuItem>
			<ContextMenuItem
				onClick={() => {
					window.location.reload();
				}}
			>
				Reload <RightSlot>⌘+R</RightSlot>
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuLabel>Spaces</ContextMenuLabel>
			<ContextMenuRadioGroup value={space} onValueChange={setSpace}>
				{spaces.slice(0, 5).map((space) => (
					<ContextMenuRadioItem key={space.id} value={space.name}>
						<ContextMenuItemIndicator>
							<Checkmark16Filled />
						</ContextMenuItemIndicator>
						{space.name}
					</ContextMenuRadioItem>
				))}
			</ContextMenuRadioGroup>
		</ContextMenuContent>
	);
};

export default SpaceCtxMenu;
