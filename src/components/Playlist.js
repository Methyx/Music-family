import playlist from "../assets/playlist.json";
import PlaylistTitle from "../components/PlaylistTitle";

// style
import "../style/playlist.css";

const Playlist = ({ setTitleToPlay }) => {
  return (
    <div className="playlist">
      <h1>On écoute quoi ?</h1>
      <div className="items">
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
    </div>
  );
};

export default Playlist;
