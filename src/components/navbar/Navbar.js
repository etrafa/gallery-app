import { useState } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

//logo
import Logo from "../navbar/assets/logo.png";
import DefaultProfile from "../navbar/assets/default-profile.avif";

//styling
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar fixed top-0 z-50">
      <Link to="/gallery-app">
        <img
          src={Logo}
          className="mr-3 h-12 sm:h-12 rounded-xl ml-2"
          alt={`logo image`}
        />
      </Link>

      <div className="icon-container">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          value={searchQuery}
        />
        <svg
          onClick={() => console.log(searchQuery)}
          className="w-8 h-8 text-gray-500"
          fillRule="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <Link to="/user-profile">
        <img className="rounded-3xl w-10 mr-6" src={DefaultProfile} />
      </Link>
    </nav>
  );
};

export default Navbar;
