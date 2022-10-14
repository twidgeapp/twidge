import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import moment from "moment";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import momentDurationFormatSetup from "moment-duration-format";

export default function Bar(props: any) {
    const { duration, curTime, onTimeUpdate } = props;

    const curPercentage = (curTime / duration) * 100;

    function formatDuration(duration: any) {
        momentDurationFormatSetup(moment);
        return (
            moment
                .duration(duration, "seconds")
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                .format("mm:ss", { trim: false })
        );
    }

    function calcClickedTime(e: any) {
        const clickPositionInPage = e.pageX;
        const bar: any = document.querySelector(".bar__progress");
        if (!bar) return;
        const barStart = bar?.getBoundingClientRect().left + window.scrollX;
        const barWidth = bar.offsetWidth;
        const clickPositionInBar = clickPositionInPage - barStart;
        const timePerPixel = duration / barWidth;
        return timePerPixel * clickPositionInBar;
    }

    function handleTimeDrag(e: any) {
        onTimeUpdate(calcClickedTime(e));

        const updateTimeOnMove = (eMove: any) => {
            onTimeUpdate(calcClickedTime(eMove));
        };

        document.addEventListener("mousemove", updateTimeOnMove);

        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", updateTimeOnMove);
        });
    }

    return (
        <div className="bar">
            <span className="bar__time">{formatDuration(curTime)}</span>
            <div
                className="bar__progress"
                style={{
                    background: `linear-gradient(to right, #2daee0 ${curPercentage}%, white 0)`,
                }}
                onMouseDown={(e) => handleTimeDrag(e)}
            >
                <span
                    className="bar__progress__knob"
                    style={{ left: `${curPercentage - 2}%` }}
                />
            </div>
            <span className="bar__time">{formatDuration(duration)}</span>
        </div>
    );
}
