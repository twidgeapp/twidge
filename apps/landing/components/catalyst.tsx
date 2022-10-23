import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const squareVariants = {
	visible: { marginTop: 0, transition: { duration: 3 } },
	hidden: { marginTop: 384, transition: { duration: 1 } },
};

const CatalystSection = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [inView]);

	return (
		<div className="w-full h-96 grid place-items-center relative">
			<div className="max-w-[1000px] w-full h-full grid place-items-center">
				<div className="absolute bottom-0 max-w-[1000px] w-full flex items-end justify-center h-96 select-none pointer-events-none z-30">
					<Image src="/assets/blooms/2.png" width={624} height={339} />
				</div>
				<motion.h1
					ref={ref}
					animate={controls}
					variants={squareVariants}
					className="text-6xl max-w-3xl text-center text-white font-semibold absolute"
				>
					A catalyst to increase your productivity by ~5x.
				</motion.h1>

				<div className="w-full max-w-[1000px] h-20 bg-bg absolute -bottom-[86px] border-t border-t-purple-purple12 "></div>
			</div>
		</div>
	);
};

export default CatalystSection;
