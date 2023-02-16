// style
import "../style/playlist-title.css";

// img
import boulon from "../img/boulon.gif";

const PlaylistTitle = ({ item, setTitleToPlay }) => {
  return item === null ? (
    <></>
  ) : (
    <div
      className="title-item"
      onClick={() => {
        setTitleToPlay(item);
      }}
    >
      <img className="boulon number1" src={boulon} alt="boulon" />
      <img className="boulon number2" src={boulon} alt="boulon" />
      <img className="boulon number3" src={boulon} alt="boulon" />
      <img className="boulon number4" src={boulon} alt="boulon" />
      <div className="content">
        <p>
          <img src={item.image} alt={`logo de ${item.author}`} />
        </p>
        <p>{item.author}</p>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default PlaylistTitle;
