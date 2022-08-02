/* eslint-disable import/no-unresolved */
import useTauriHandler from "@twidge/utils/hooks/useTauriHandler";
import React, { useEffect } from "react";
import Spaces, { Space } from "@twidge/utils/types/spaces";
import { styled } from "@twidge/config/stitches.config";
import * as FluentIcons from "@fluentui/react-icons";
import Container from "@twidge/primitives/containers";
import Tippy from "@tippyjs/react";
import Logo from "../logo";
import "tippy.js/dist/tippy.css";
import useSpaceStore from "@twidge/utils/state/spaces";
import { Link } from "react-router-dom";
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@twidge/primitives/toast";

const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  marginTop: "12px",
  backgroundColor: "$backgroundColor",
  gap: "8px",
});

const SpaceRoot = styled("button", {
  all: "unset",
  cursor: "pointer",
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",

  "&:hover": {
    backgroundColor: "#1F2024",
    transition: "all 0.2s ease-in-out",
  },

  variants: {
    active: {
      off: {
        backgroundColor: "$backgroundColor",
      },
      on: {
        backgroundColor: "#1F2024",
      },
    },
  },
});

function SpaceComponent({ space, name }: { space: Space; name: string }) {
  // @ts-ignore
  const Icon = FluentIcons[name] as any;

  return (
    <Tippy animateFill content={space.name}>
      <Link to={`spaces/${space.id}`}>
        <SpaceRoot active="off">
          <Icon color={space.color} />
        </SpaceRoot>
      </Link>
    </Tippy>
  );
}

function AddComponent() {
  const { send, result } = useTauriHandler<Space>({ name: "create_space" });
  const addSpaces = useSpaceStore((space) => space.addSpace);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (result) {
      setOpen(true);
      addSpaces(result);
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [result]);

  return (
    <ToastProvider swipeDirection="right">
      <SpaceRoot
        onClick={() => {
          send();
        }}
        active="off"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49996 13.8333V8.5M8.49996 8.5V3.16666M8.49996 8.5H13.8333M8.49996 8.5H3.16663"
            stroke="#699BF7"
            strokeWidth="1.33333"
            strokeLinecap="round"
          />
        </svg>
      </SpaceRoot>

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Succesfully Created Space</ToastTitle>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

const BreakPoint = styled("div", {
  marginTop: "2px",
  marginBottom: "2px",
  width: "75%",
  borderBottom: "0.1px solid #4B4040",
});

function Sidebar() {
  const { send, result } = useTauriHandler<Spaces>({ name: "get_spaces" });
  const spaces = useSpaceStore((space) => space.spaces);
  const overwriteSpaces = useSpaceStore((space) => space.overwriteSpaces);

  useEffect(() => {
    console.log(result);
    overwriteSpaces(result as any);
  }, [result]);

  useEffect(() => {
    send();
  }, []);

  return (
    <Container
      css={{
        width: "60px",
        minHeight: "100vh",
        backgroundColor: "$backgroundColor",
        maxWidth: "60px",
        minWidth: "60px",
        borderRight: "1px solid $borderColor",
        paddingTop: "12px",
        overflowY: "auto",
        paddingBottom: "24px",
        height: "100%",
      }}
      flex="col"
      align="center"
      justify="start"
    >
      <Link to={"/"}>
        <Logo />
      </Link>
      <Body>
        <AddComponent />
        <BreakPoint />
        {spaces && (
          <>
            {spaces.map((space) => (
              <div key={space.id}>
                <SpaceComponent space={space} name={`${space.icon}`} />
              </div>
            ))}
          </>
        )}
      </Body>
    </Container>
  );
}

export default Sidebar;
