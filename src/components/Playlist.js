import { useState } from "react";

import playlist from "../assets/playlist.json";
import PlaylistTitle from "../components/PlaylistTitle";

// style
import "../style/metal.css";
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
              <div className="song" key={index}>
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
            setRotate((r) => r + 60);
          }}
        >
          {"<"}
        </button>
        <button className="metal rectangle">Play</button>
        <button
          className="metal round"
          onClick={() => {
            setRotate((r) => r - 60);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Playlist;
