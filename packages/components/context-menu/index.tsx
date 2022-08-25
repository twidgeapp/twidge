import { styled } from '@twidge/config/stitches.config';
import { violet } from '@radix-ui/colors';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

const contentStyles = {
	minWidth: 220,
	backgroundColor: '$surface1',
	borderRadius: 6,
	overflow: 'hidden',
	padding: 5,
	boxShadow:
		'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
};

const StyledContent = styled(ContextMenuPrimitive.Content, {
	...contentStyles,
});

function Content(props: any) {
	return (
		<ContextMenuPrimitive.Portal>
			<StyledContent {...props} />
		</ContextMenuPrimitive.Portal>
	);
}

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, {
	...contentStyles,
});

function SubContent(props: any) {
	return (
		<ContextMenuPrimitive.Portal>
			<StyledSubContent {...props} />
		</ContextMenuPrimitive.Portal>
	);
}

const itemStyles = {
	all: 'unset',
	fontSize: 13,
	lineHeight: 1,
	color: '$blue',
	borderRadius: 3,
	display: 'flex',
	alignItems: 'center',
	height: 25,
	padding: '0 5px',
	position: 'relative',
	paddingLeft: 25,
	userSelect: 'none',

	'&[data-disabled]': {
		color: '$surface',
		pointerEvents: 'none',
	},

	'&[data-highlighted]': {
		backgroundColor: '$surface2',
		color: '$textColor',
	},
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
	...itemStyles,
});
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, {
	...itemStyles,
});
const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
	'&[data-state="open"]': {
		backgroundColor: violet.violet4,
		color: '$textColor',
	},
	...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
	paddingLeft: 25,
	fontSize: 12,
	lineHeight: '25px',
	color: '$textColor',
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
	height: 1,
	backgroundColor: violet.violet6,
	margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
	position: 'absolute',
	left: 0,
	width: 25,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
});

// Exports
export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = Content;
export const ContextMenuItem = StyledItem;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuSubTrigger = StyledSubTrigger;
export const ContextMenuSubContent = SubContent;
