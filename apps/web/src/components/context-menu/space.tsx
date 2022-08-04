import useSpaceStore from '@twidge/utils/state/spaces';
import React from 'react';
import { ContextMenuContent, ContextMenuItem, ContextMenuItemIndicator, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, RightSlot } from '.';

const SpaceContextMenu = () => {
  const [space, setSpace] = React.useState("");
  const spaces = useSpaceStore((spaces)=>spaces.spaces)

  return (
        <ContextMenuContent sideOffset={5} align="end">
          <ContextMenuLabel>Spaces</ContextMenuLabel>
          <ContextMenuRadioGroup value={space} onValueChange={setSpace}>
          {spaces?.map(space=>(
            <ContextMenuRadioItem value={space.id}>
              {space.name}
            </ContextMenuRadioItem>
          ))}
          </ContextMenuRadioGroup>
        </ContextMenuContent>
  );
};

export default SpaceContextMenu;

