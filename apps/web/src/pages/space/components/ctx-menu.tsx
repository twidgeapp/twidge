import { styled } from '@twidge/config/stitches.config';
import React from 'react';
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
import { TicketDiagonal20Filled } from '@fluentui/react-icons';

const RightSlot = styled('div', {
	marginLeft: 'auto',
	paddingLeft: 20,
	color: 'white',
	'[data-highlighted] > &': { color: 'white' },
	'[data-disabled] &': { color: '$inactiveBorderColor' },
});

export const ContextMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState('pedro');

	return (
		<ContextMenuContent sideOffset={5} align="end">
			<ContextMenuItem>
				<ContextMenuItemIndicator>
					<TicketDiagonal20Filled />
				</ContextMenuItemIndicator>
				Back <RightSlot>⌘+[</RightSlot>
			</ContextMenuItem>
			<ContextMenuItem disabled>
				Foward <RightSlot>⌘+]</RightSlot>
			</ContextMenuItem>
			<ContextMenuItem>
				Reload <RightSlot>⌘+R</RightSlot>
			</ContextMenuItem>
			<ContextMenuSub>
				<ContextMenuSubTrigger>
					More Tools
					<RightSlot></RightSlot>
				</ContextMenuSubTrigger>
				<ContextMenuSubContent sideOffset={2} alignOffset={-5}>
					<ContextMenuItem>
						Save Page As… <RightSlot>⌘+S</RightSlot>
					</ContextMenuItem>
					<ContextMenuItem>Create Shortcut…</ContextMenuItem>
					<ContextMenuItem>Name Window…</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Developer Tools</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSeparator />
			<ContextMenuCheckboxItem
				checked={bookmarksChecked}
				onCheckedChange={setBookmarksChecked}
			>
				<ContextMenuItemIndicator>
					<TicketDiagonal20Filled />
				</ContextMenuItemIndicator>
				Show Bookmarks <RightSlot>⌘+B</RightSlot>
			</ContextMenuCheckboxItem>
			<ContextMenuCheckboxItem
				checked={urlsChecked}
				onCheckedChange={setUrlsChecked}
			>
				<ContextMenuItemIndicator>
					<TicketDiagonal20Filled />
				</ContextMenuItemIndicator>
				Show Full URLs
			</ContextMenuCheckboxItem>
			<ContextMenuSeparator />
			<ContextMenuLabel>People</ContextMenuLabel>
			<ContextMenuRadioGroup value={person} onValueChange={setPerson}>
				<ContextMenuRadioItem value="pedro">
					<ContextMenuItemIndicator>
						<TicketDiagonal20Filled />
					</ContextMenuItemIndicator>
					Pedro Duarte
				</ContextMenuRadioItem>
				<ContextMenuRadioItem value="colm">
					<ContextMenuItemIndicator>
						<TicketDiagonal20Filled />
					</ContextMenuItemIndicator>
					Colm Tuite
				</ContextMenuRadioItem>
			</ContextMenuRadioGroup>
		</ContextMenuContent>
	);
};

export default ContextMenuDemo;
