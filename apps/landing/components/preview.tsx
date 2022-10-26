const Preview = () => {
	return (
		<div className="h-full grid place-items-center mt-[50px]">
			<img
				className="rounded-xl"
				style={{
					boxShadow: "0px 0px 500px 50px rgba(0, 194, 255, 0.25)",
				}}
				src="/assets/illustrations/preview.svg"
				width={"1366"}
				height={"768"}
				alt=""
			/>
		</div>
	);
};

export default Preview;
