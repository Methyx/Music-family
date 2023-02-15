// style
import "../style/playlist-title.css";

const PlaylistTitle = ({ item, setTitleToPlay }) => {
  return (
    <div
      className="title-item"
      onClick={() => {
        setTitleToPlay(item);
      }}
    >
      <p>
        <img src={item.image} alt={`logo de ${item.author}`} />
      </p>
      <p>{item.author}</p>
      <p>{item.title}</p>
    </div>
  );
};

export default PlaylistTitle;
