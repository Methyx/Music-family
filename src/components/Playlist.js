import { useState } from "react";

import playlist from "../assets/playlist.json";
import PlaylistTitle from "../components/PlaylistTitle";

// style
import "../style/playlist.css";

const Playlist = ({ setTitleToPlay }) => {
  const [rotate, setRotate] = useState(0);
  return (
    <div className="playlist">
      <h1>On écoute quoi ?</h1>
      <div className="songs-container">
        <div
          className="songs-carousel"
          style={{
            transform: `translateZ(-100px) rotateX(${rotate}deg)`,
          }}
        >
          {playlist.map((item, index) => {
            return (
              <div className="song">
                <PlaylistTitle
                  key={index}
                  item={item}
                  setTitleToPlay={setTitleToPlay}
                />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setRotate((r) => r - 60);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setRotate((r) => r + 60);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Playlist;
