// style
import "../style/home.css";

// component
import Playlist from "../components/Playlist";

const Home = () => {
  return (
    <main className="home">
      <div className="empty"></div>
      <Playlist />
    </main>
  );
};

export default Home;
