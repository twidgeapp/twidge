import { useContext } from 'react';
import SpaceContext from '../../utils/ctx/space';

const SpaceSidebar = () => {
    const { space } = useContext(SpaceContext);
    return (
        <div className="w-64 bg-app-sidebar-background border-r border-r-text/10">
            {space?.icon}
        </div>
    );
};

export default SpaceSidebar;
