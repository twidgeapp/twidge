import styled from "@twidge/config/stitches.config";

const Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "6px 12px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "700",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.9)",
  },
  "&:active": {
    filter: "brightness(0.8)",
  },
});

export default Button;
