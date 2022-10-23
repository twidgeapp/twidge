import styled from "@twidge/config/stitches.config";

const Root = styled("div", {
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "24px",
	justifyContent: "center",
});

const HomePage = () => {
	return <Root>YOO</Root>;
};

export default HomePage;
