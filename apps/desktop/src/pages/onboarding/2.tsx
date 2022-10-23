import styled from "@twidge/config/stitches.config";
import Logo from "../../assets/logo.svg";
import Button from "@twidge/components/buttons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

const Header = styled("h1", {
	fontSize: "28px",
	fontWeight: "900",
	color: "$mauve11",
	margin: "0",
});

const Span = styled(motion.span, {
	fontSize: "14px",
	color: "$mauve11",
	margin: "0",
	textAlign: "center",
	lineHeight: "1.5",
	width: "100%",
	display: "block",
	fontWeight: "700",

	marginTop: "12px",
});

const Buttons = styled(motion.div, {
	display: "flex",
	flexDirection: "row",
	gap: "12px",
	marginTop: "12px",
});

const OnboardingPage2 = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const onKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				navigate("/onboarding/3");
			}
		};
		document.addEventListener("keydown", onKeyPress);

		return () => {
			document.removeEventListener("keydown", onKeyPress);
		};
	}, []);

	return (
		<Root
			initial={{ y: 25, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 1 }}
		>
			<h1>Collaboration</h1>
		</Root>
	);
};

export default OnboardingPage2;
