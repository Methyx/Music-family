// style
import "../style/playlist-title.css";

const PlaylistTitle = ({ item }) => {
  return (
    <div className="title-item">
      <p>
        <img src={item.image} alt={`logo de ${item.author}`} />
      </p>
      <p>{item.author}</p>
      <p>{item.title}</p>
    </div>
  );
};

export default PlaylistTitle;
