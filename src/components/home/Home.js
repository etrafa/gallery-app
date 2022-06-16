import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

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
    <div>
      <div className="relative bg-[url('./components//home/assets/wallpaper.jpg')] flex flex-col justify-center items-center w-full h-[calc(24rem_+_7rem)] bg-cover bg-center">
        <h1 className="text-white text-4xl max-w-screen-sm font-semibold">
          The best free stock photos, images shared by creators.
        </h1>
        <div className="w-11/12 max-w-screen-sm relative mt-12">
          <svg
            className="absolute top-2.5 right-8 transform w-7 h-7 text-gray-500 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <input
            className="w-full h-12 rounded-2xl border-none mx-auto block pl-6 "
            type="text"
            placeholder="Search for free photos"
          />
        </div>
      </div>
      <div className="w-full h-screen bg-orange-500"></div>
    </div>
  );
};

export default Home;
