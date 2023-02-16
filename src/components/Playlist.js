import { useState } from "react";

import playlist from "../assets/playlist.json";
import PlaylistTitle from "../components/PlaylistTitle";

// style
import "../style/metal.css";
import "../style/playlist.css";

const Playlist = ({ setTitleToPlay }) => {
  const [rotate, setRotate] = useState(0);
  const nbSongs = playlist.length;
  const rotationAngle = 360 / nbSongs;
  const translationZ =
    1.2 * (50 / Math.tan(((rotationAngle / 2) * Math.PI) / 180));
  return (
    <div className="playlist">
      <h1>On écoute quoi ?</h1>
      <div
        className="songs-container"
        style={{ height: `${2.4 * translationZ}px` }}
      >
        <div
          className="songs-carousel"
          style={{
            transform: `translateZ(-${translationZ}px) rotateX(${rotate}deg)`,
          }}
        >
          {playlist.map((item, index) => {
            return (
              <div
                className="song"
                key={index}
                style={{
                  transform: `rotateX(${
                    rotationAngle * index
                  }deg) translateZ(${translationZ}px)`,
                }}
              >
                <PlaylistTitle item={item} setTitleToPlay={setTitleToPlay} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button
          className="metal round"
          onClick={() => {
            setRotate((r) => r + rotationAngle);
          }}
        >
          {"<"}
        </button>
        <button className="metal rectangle">Play</button>
        <button
          className="metal round"
          onClick={() => {
            setRotate((r) => r - rotationAngle);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Playlist;
