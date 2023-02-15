import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import PlaylistTitle from "./PlaylistTitle";

// style
import "../style/player.css";

const Player = ({ titleToPlay }) => {
  return (
    <div className="player">
      <div className="player-head">
        <PlaylistTitle item={titleToPlay} setTitleToPlay={null} />
      </div>
      <AudioPlayer src={titleToPlay?.link} />
    </div>
  );
};

export default Player;
