import playlist from "../assets/playlist.json";
import PlaylistTitle from "../components/PlaylistTitle";

// style
import "../style/playlist.css";

const Playlist = () => {
  return (
    <div className="playlist">
      <h1>La Playlist</h1>
      <div className="items">
        {playlist.map((item, index) => {
          return <PlaylistTitle key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Playlist;
