import useCurrentSpace from '../../../hooks/useCurrentSpace';
import Header from './header';

const SpaceSidebar = () => {
    const space = useCurrentSpace();

    if (!space) return <></>;

    return (
        <div className="w-64 bg-app-sidebar-background border-r border-r-text/10">
            <Header space={space} />
        </div>
    );
};

export default SpaceSidebar;
