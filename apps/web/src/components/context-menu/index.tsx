import React from 'react';
import { styled } from '@stitches/react';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

const contentStyles = {
  minWidth: 160,
  backgroundColor: '#17181D',
  borderRadius: 4,
  overflow: 'hidden',
  padding: 5,
  border: "0.25px solid #4B4040",
  color: 'white',
};

const StyledContent = styled(ContextMenuPrimitive.Content, { ...contentStyles });

function Content(props) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, { ...contentStyles });

function SubContent(props) {
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
  color: "white",
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: 'gray',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: "$backgroundColor",
    color: 'white',
  },
};

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: 'white',
    color: "white",
  },
  color: 'white !important',
  ...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: "white",
  });

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "white",
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

export const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: "white",
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: 'white' },
});

