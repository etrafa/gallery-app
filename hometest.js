import { useState } from "react";
import { Link } from "react-router-dom";

//styling
import "./Home.css";

const Home = ({ query, setQuery }) => {
  const placeHolderHandler = (e) => {
    const placeHolderText = e.target.getAttribute("placeholder");
    const lenght = placeHolderText.lenght;
    const speed = 140;
    const delay = 400;
    let i = 0;

    console.log(placeHolderText.length);

    setInterval(() => {
      i++;
      e.target.setAttribute("placeholder", placeHolderText.substring(0, i));
      if (i > placeHolderText.length) {
        i = 0;
      }
    }, speed);
  };

  return (
    <div className="relative bg-[url('./components//home/assets/wallpaper.jpg')] w-full h-screen bg-cover text-center">
      <h1 className="text-white text-7xl pt-24 weight font-bold">Retina</h1>
      <label>
        <input
          onClick={placeHolderHandler}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 text-center lg:w-2/6"
          type="text"
          placeholder={placeHolderMessage}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-zinc-800 text-white w-32 rounded-lg h-10"
          value={query}
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default Home;



import { useState } from "react";
import { Link } from "react-router-dom";

//styling
import "./Home.css";

const Home = ({ query, setQuery }) => {
  const [placeHolderMessage, setPlaceHolderMessage] = useState([
    "Travel...",
    "Car",
    "Flower",
    "Love",
    "Japan",
  ]);

  const placeHolderHandler = (e) => {
    const placeHolderText = e.target.getAttribute("placeholder");
    const speed = 140;
    const delay = 400;
    let i = 0;

    setInterval(() => {
      i++;
      e.target.setAttribute("placeholder", placeHolderText.substring(0, i));
      if (i > placeHolderText.length) {
        i = 0;
      }
    }, speed);
  };

  return (
    <div className="relative bg-[url('./components//home/assets/wallpaper.jpg')] w-full h-screen bg-cover text-center">
      <h1 className="text-white text-7xl pt-24 weight font-bold">Retina</h1>
      <label>
        <input
          onClick={placeHolderHandler}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-12 text-center lg:w-2/6"
          type="text"
          placeholder={placeHolderMessage}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 bg-zinc-800 text-white w-32 rounded-lg h-10"
          value={query}
        >
          Search
        </button>
      </Link>
    </div>
  );
};

export default Home;
