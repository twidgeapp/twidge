import Spaces from "@twidge/utils/state/spaces";
import { observer } from "mobx-react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "../../layouts/base_layout";
import InfiniteViewer from "@twidge/components/infinite-viewer";

interface Props {
    spaceStore: Spaces;
}

const SpacePage = observer((props: Props) => {
    const { id } = useParams();
    const ref = useRef();
    const space = useMemo(() => {
        const space = props.spaceStore.spaces.find(
            (space) => space.id.toString() === id
        );
        return space;
    }, [id, props.spaceStore]);

    useEffect(() => {
        if (space) {
            document.body.style.setProperty("--accent", space?.accentColor);
            document.body.style.setProperty("--primary", space?.primaryColor);
        }

        return () => {
            document.body.style.setProperty("--accent", "298");
            document.body.style.setProperty("--primary", "192");
        };
    }, [space]);

    return (
        <BaseLayout>
            <InfiniteViewer ref={ref}>
                <div className="w-10 h-10 bg-black absolute"></div>
            </InfiniteViewer>
        </BaseLayout>
    );
});

export default SpacePage;
