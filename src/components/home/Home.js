import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styling
import "./Home.css";

const Home = ({ query, setQuery }) => {
  const placeHolderMessage = [
    "Travel...",
    "Car...",
    "Flower...",
    "Love...",
    "Japan...",
  ];
  const [index, setIndex] = useState(0);

  // placeholder animation
  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeHolderMessage.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };

    setInterval(timer, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative bg-[url('./components//home/assets/wallpaper.jpg')] w-full h-screen bg-cover text-center">
      <h1 className="text-white text-7xl pt-24 weight font-bold">Retina</h1>
      <label>
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 text-center lg:w-2/6"
          type="text"
          placeholder={placeHolderMessage[index]}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <Link to="/gallery">
        <button className="absolute bottom-1 right-1 transform -translate-x-1/2 -translate-y-1/2 mt-24 text-zinc-800 bg-white w-48 rounded-lg h-10">
          Discover Now
        </button>
      </Link>
      <Link to="/search">
        <button
          className="absolute top-1/2 left-1/2 transform inset-0 -translate-x-1/2 -translate-y-1/2 mt-24 bg-zinc-800 text-white w-32 rounded-lg h-10"
          value={query}
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default Home;
