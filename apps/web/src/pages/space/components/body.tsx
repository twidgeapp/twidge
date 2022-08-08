import Header from './header';
import InfiniteViewer from 'react-infinite-viewer';

const Body = () => {
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
					<div className="viewport">AA</div>;
				</InfiniteViewer>
			</div>
		</div>
	);
};

export default Body;
