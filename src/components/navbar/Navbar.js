import { useState } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

//logo
import Logo from "../navbar/assets/logo.png";
import DefaultProfile from "../navbar/assets/default-profile.avif";

const Navbar = () => {
  const [query, setQuery] = useState("");

  return (
    <nav className="bg-white w-full border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed overflow-auto">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <img src={Logo} className="mr-3 h-12 sm:h-12" alt={`logo image`} />
        </Link>
        <div className="flex md:order-2 mx-auto">
          <div className=" relative mr-3 md:mr-0">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
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
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <Link to="/user-profile">
          <img className="rounded-3xl w-10 mr-2" src={DefaultProfile} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
