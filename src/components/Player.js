import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import PlaylistTitle from "./PlaylistTitle";

// style
import "../style/player.css";

const Player = ({ titleToPlay }) => {
  return (
    <div className="player">
      <div className="player-head">
        <PlaylistTitle item={titleToPlay} />
      </div>
      <div className="audio-player">
        <AudioPlayer src={titleToPlay?.link} />
      </div>
    </div>
  );
};

export default Player;
