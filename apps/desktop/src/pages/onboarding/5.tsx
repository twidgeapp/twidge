import styled from "@twidge/config/stitches.config";
import Dialog from "@twidge/components/dialog";
import { motion } from "framer-motion";

const Root = styled(motion.div, {
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "4px",
	justifyContent: "center",

	userSelect: "none",
});

const OnboardingPage5 = () => {
	return (
		<Root
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 1 }}
		>
			<Dialog autoOpen={true}>
				<div>AforApple</div>
				<div>AforApple</div>
			</Dialog>
		</Root>
	);
};

export default OnboardingPage5;
