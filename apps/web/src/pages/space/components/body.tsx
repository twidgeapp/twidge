import Header from './header';
import InfiniteViewer from 'react-infinite-viewer';
import Draggable from 'react-draggable';
import { useElementStore } from '@twidge/utils/elements/state';
import Element from './element';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import rspc from '@twidge/utils/query';
import ContextMenuDemo from './ctx-menu';
import {
	ContextMenu,
	ContextMenuTrigger,
} from '@twidge/components/context-menu';

const Body = () => {
	const { id } = useParams();
	const elementState = useElementStore((state) => state.elements);
	const { mutate } = rspc.useMutation('elements.move_element');
	const elements = useMemo(() => {
		return elementState.filter(
			(element) => element.spaceId === parseInt(id as string)
		);
	}, [elementState]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				height: '100%',
			}}
		>
			<Header />
			<ContextMenu>
				<ContextMenuTrigger
					style={{
						width: '100%',
						height: '100%',
					}}
				>
					<div
						className="body"
						style={{
							width: '100%',
							height: '100%',
						}}
					>
						<InfiniteViewer
							className="viewer"
							useAutoZoom={true}
							useMouseDrag={true}
							usePinch={true}
							useWheelScroll={true}
						>
							<div className="viewport">
								{elements.map((element) => (
									<Draggable
										defaultPosition={{
											x: element.positionX,
											y: element.positionY,
										}}
										onStop={(e, data) => {
											mutate({
												id: element.id,
												position_x: data.x,
												position_y: data.y,
											});
										}}
										key={element.id}
									>
										<div>
											<Element {...element} />
										</div>
									</Draggable>
								))}
							</div>
						</InfiniteViewer>
					</div>
				</ContextMenuTrigger>
				<ContextMenuDemo></ContextMenuDemo>
			</ContextMenu>
		</div>
	);
};

export default Body;
