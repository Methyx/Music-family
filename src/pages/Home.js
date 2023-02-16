import { useState } from "react";

// style
import "../style/home.css";

// Data
import playlistData from "../assets/playlist.json";

// component
import Playlist from "../components/Playlist";
import Player from "../components/Player";

const Home = () => {
  const [titleToPlay, setTitleToPlay] = useState(playlistData[0]);
  return (
    <main className="home">
      <div className="empty"></div>
      <div className="home-content">
        <Player titleToPlay={titleToPlay} />
        <Playlist
          playlistData={playlistData}
          titleToPlay={titleToPlay}
          setTitleToPlay={setTitleToPlay}
        />
      </div>
    </main>
  );
};

export default Home;
