import useAudioPlayer from "./hooks";
import Pause from "./pause";
import Play from "./play";
import Bar from "./bar";
import {WhiteboardItem} from "@twidge/utils/bindings"
import "./index.css"
import {convertFileSrc} from "@tauri-apps/api/tauri";

const AudioPlayer = ({element}: { element: WhiteboardItem }) => {
    const {
        curTime,
        duration,
        playing,
        setPlaying,
        setClickedTime
    } = useAudioPlayer({id: element.id.toString()});

    return (
        <div className="player">
            <audio id={element.id.toString()}>
                <source src={convertFileSrc(element.value)}/>
                Your browser does not support the <code>audio</code> element.
            </audio>
            <div className="controls">
                {playing ? (
                    <Pause handleClick={() => setPlaying(false)}/>
                ) : (
                    <Play handleClick={() => setPlaying(true)}/>
                )}
                <div className={"flex-grow"}>
                    <Bar
                        curTime={curTime}
                        duration={duration}
                        onTimeUpdate={(time) => setClickedTime(time)}
                    />
                </div>
            </div>
        </div>

    )
}

export default AudioPlayer;