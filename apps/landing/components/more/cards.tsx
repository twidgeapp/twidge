interface Props {
	title: string;
	description: string;
	image: string;
}

const Card = (props: Props) => {
	return (
		<div className="w-3/4 md:px-16 py-4 rounded-3xl opacity-70 justify-center flex flex-col gap-4 items-center">
			<h1 className="text-3xl text-center text-blue-blue12 font-extrabold">
				{props.title}
			</h1>
			<div className="w-full sm:px-16 py-4 backdrop-blur-md rounded-3xl opacity-70 sm:bg-[#0A0B1A] sm:border border-[#434242CC] flex flex-col gap-2">
				<img className="hidden sm:block" src={props.image} alt="" />
				<h1 className="mb-3 text-sm md:text-lg text-white text-center font-medium">
					{props.description}
				</h1>
			</div>
		</div>
	);
};

export default Card;
