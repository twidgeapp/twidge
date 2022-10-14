import React from "react";
import { Stop16Filled } from "@fluentui/react-icons";

export default function Pause(props: any) {
    const { handleClick } = props;

    return (
        <button className="player__button" onClick={() => handleClick()}>
            <Stop16Filled />
        </button>
    );
}
