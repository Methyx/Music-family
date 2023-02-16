import { useState } from "react";

// style
import "../style/home.css";

// component
import Playlist from "../components/Playlist";
import Player from "../components/Player";

const Home = () => {
  const [titleToPlay, setTitleToPlay] = useState(null);
  return (
    <main className="home">
      <div className="empty"></div>
      <div className="home-content">
        <Playlist setTitleToPlay={setTitleToPlay} />
        <Player titleToPlay={titleToPlay} />
      </div>
    </main>
  );
};

export default Home;
