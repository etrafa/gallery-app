//components
import SearchResult from "./SearchResult";

//react
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ query, setQuery }) => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative bg-[url('./components//home/assets/wallpaper.jpg')] flex flex-col justify-center items-center w-full h-[calc(24rem_+_7rem)] bg-cover bg-center">
        <h1 className="text-white text-4xl max-w-screen-sm font-semibold">
          The best free stock photos, images shared by creators.
        </h1>
        <div className="w-11/12 max-w-screen-sm relative mt-12">
          <svg
            onClick={() => {
              setQuery(searchInputRef.current.value);
              navigate(`/search/${searchInputRef.current.value}`);
              searchInputRef.current.value = "";
            }}
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
            ref={searchInputRef}
            className="w-full h-12 rounded-2xl border-none mx-auto block pl-6 "
            type="text"
            placeholder="Search for free photos"
          />
        </div>
      </div>
      <SearchResult query={"istanbul"} />
    </div>
  );
};

export default Home;
