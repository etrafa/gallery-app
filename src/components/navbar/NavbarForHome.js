//logo
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../navbar/assets/logo.png";

//component
import ExploreDropDown from "./ExploreDropDown";

const NavbarComp = () => {
  //change navbar color when scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) setColor(true);
    else setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? "w-full h-20 bg-white border-b flex justify-between items-center border-gray-50 fixed top-0 z-50 px-4 lg:px-24"
          : "w-full h-20 bg-transparent flex justify-between items-center border-gray-50 fixed top-0 z-50 px-4 lg:px-24"
      }
    >
      <Link to="/">
        <img className="w-10 h-10 cursor-pointer" src={Logo} alt="logo" />
      </Link>
      <div
        className={
          color
            ? "relative flex items-center w-9/12 lg:w-7/12"
            : "relative flex items-center w-9/12 lg:w-7/12 opacity-0"
        }
      >
        <svg
          className="absolute right-2 w-7 h-7 text-gray-500 cursor-pointer"
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
          className="w-full h-12 rounded-lg bg-search-bg placeholder:text-xl pl-6"
          type="text"
          placeholder="Search for free pictures"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 lg:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <ExploreDropDown />
      <button className="hidden lg:block  w-36 h-12 text-slate-400 font-bold">
        Sign Up
      </button>
    </nav>
  );
};

export default NavbarComp;
