const HeroSection = () => {
	return (
		<div className="w-full h-[60vh] flex items-center justify-end flex-col">
			<h1 className="text-7xl text-white font-extrabold max-w-4xl text-center  tracking-[-2%]">
				Twidge unleashes your productive self.
			</h1>
			<p className="text-xl mt-6 font-medium max-w-3xl text-white text-center leading-9 tracking-[-6.5%]">
				Meet the new standard for organizing your life, plan your calendars,
				write notes build to-do lists blazingly fast.
			</p>
			<div className="p-3">
				<div className="flex gap-3">
					<button className="bg-blue-blue6 font-medium px-5 py-3 rounded-xl border border-blue-blue11 text-blue-blue11 font-mulish text-xl leading-6 tracking-[-5%]">
						Get started
					</button>
					<button className="bg-purple-purple6 font-medium px-5 py-3 rounded-xl border border-purple-purple11 text-purple-purple11 font-mulish text-xl leading-6 tracking-[-5%]">
						Star us on GitHub
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
