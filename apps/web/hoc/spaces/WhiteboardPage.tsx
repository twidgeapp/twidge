import React, { useContext } from 'react';
import SpaceContext from '../../utils/ctx/space';
import SpaceLayout from '../../layouts/space';
import ReactInfiniteViewer from 'react-infinite-viewer';
import useClipSense from '../../hooks/useClipSense';

const WhiteBoardPage = () => {
    const { space: currentSpace, whiteboard: currentWhiteboard } =
        useContext(SpaceContext);
    const viewerRef = React.useRef<ReactInfiniteViewer>(null);
    useClipSense();
    return (
        <SpaceLayout
            title={`${currentWhiteboard?.name} - ${currentSpace?.name} - Twidge`}
            icon={currentWhiteboard?.icon}
        >

            <ReactInfiniteViewer
                ref={viewerRef}
                useMouseDrag={true}
                usePinch={true}
                useWheelScroll={true}
                className="viewer"
            >
                <div className="viewport">asd</div>
            </ReactInfiniteViewer>
        </SpaceLayout>
    );
};

export default WhiteBoardPage;
