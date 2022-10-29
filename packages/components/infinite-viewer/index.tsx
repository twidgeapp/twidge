import React from "react";

const InfiniteViewer = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-full h-full overflow-auto relative">
            {props.children}
        </div>
    );
});

export default InfiniteViewer;
