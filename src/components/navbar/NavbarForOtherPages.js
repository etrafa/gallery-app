import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

//logo
import Logo from "../navbar/assets/logo.png";

//firebase
import { useAuth, logOut } from "../../firebase/firebaseConfig";

//context api
import { GalleryContext } from "../Context/GalleryContext";

//components
import ExploreDropDown from "./ExploreDropDown";

const NavbarForOtherPages = ({ setQuery }) => {
  const navigate = useNavigate();

  //useRef (for tracking search input)
  const searchBarRef = useRef();

  const { setOpenLoginModal } = useContext(GalleryContext);

  //TRACK IF USER LOGGED IN
  const currentUser = useAuth();

  return (
    <nav className="w-full h-20 bg-white border-b flex justify-between items-center border-gray-50 fixed top-0 z-50 px-4 lg:px-24">
      <Link to="/">
        <img className="w-10 h-10 cursor-pointer" src={Logo} alt="logo" />
      </Link>
      <div className={"relative flex items-center w-9/12 lg:w-7/12"}>
        <svg
          onClick={() => {
            setQuery(searchBarRef.current.value);
            navigate(`/search/${searchBarRef.current.value}`);
            searchBarRef.current.value = "";
          }}
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
          ref={searchBarRef}
          className="w-full h-12 rounded-lg bg-search-bg placeholder:text-xl pl-6"
          type="text"
          placeholder="Search for free pictures"
        />
      </div>

      <ExploreDropDown setQuery={setQuery} />

      {/* //!SHOW SIGN UP COMPONENT IF USER HAS NOT LOGGED IN 
    //?OR SHOW PROFILE COMPONENT IF USER HAS LOGGED IN */}

      {currentUser ? (
        <div
          className={
            "w-10 h-10 bg-green-400 rounded-full relative cursor-pointer group"
          }
        >
          <span className="w-10 h-10 text-2xl text-main-gray-text font-medium flex justify-center items-center">
            e
          </span>
          <div className="hidden group-hover:block absolute py-4 rounded-xl top-9 z-50 w-36 -left-28  h-auto bg-white text-center">
            <ul>
              <Link to="/user-profile">
                <li className="py-4 cursor-pointer hover:bg-gray-100 text-main-gray-text font-medium">
                  Profile
                </li>
              </Link>
              <li
                onClick={() => {
                  logOut();
                  navigate("/");
                }}
                className="py-4 cursor-pointer hover:bg-gray-100 text-main-gray-text font-medium"
              >
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpenLoginModal(true)}
          className="hidden lg:block  w-36 h-12 text-slate-400 font-bold border hover:bg-gray-50"
        >
          Sign Up
        </button>
      )}
    </nav>
  );
};

export default NavbarForOtherPages;
