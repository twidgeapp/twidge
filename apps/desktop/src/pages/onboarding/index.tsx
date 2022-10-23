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

const OnboardingHomePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const onKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				navigate("/onboarding/1");
			}
		};
		document.addEventListener("keydown", onKeyPress);

		return () => {
			document.removeEventListener("keydown", onKeyPress);
		};
	}, []);

	return (
		<Root
			data-tauri-drag-region
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 1 }}
		>
			<img src={Logo} alt="Logo" />
			<Header>Welcome to Twidge.</Header>
			<Span
				initial={{ y: -25, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.75, delay: 0.75 }}
			>
				Meet the new standard for organizing your life plan your calendars,
				<br />
				write notes, build to-do lists blazingly fast
			</Span>

			<Buttons
				initial={{ opacity: 0, y: 5 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.75, delay: 1 }}
			>
				<Button
					onClick={() => {
						navigate("/onboarding/1");
					}}
					css={{
						backgroundColor: "$pink5",
						color: "$pink10",
						border: "1px solid $pink10",
						width: "75px",
					}}
				>
					Next
				</Button>
				<Button
					css={{
						backgroundColor: "$mauve5",
						color: "$mauve10",
						border: "1px solid $mauve10",
						width: "75px",
					}}
				>
					Skip
				</Button>
			</Buttons>
		</Root>
	);
};

export default OnboardingHomePage;
