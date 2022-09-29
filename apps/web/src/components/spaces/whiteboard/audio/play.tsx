import React from "react";
import {Play16Filled} from "@fluentui/react-icons";

export default function Play(props: any) {
    const {handleClick} = props;

    return (
        <button className="player__button" onClick={() => handleClick()}>
            <Play16Filled/>
        </button>
    );
}
