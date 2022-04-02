import { Link } from "react-router-dom";

//logo image
import Logo from "./assets/logo.png";

//styling
import "./Navbar.css";

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/gallery-app">
        <img src={Logo} className="navbar-logo" alt={`logo image`} />
      </Link>
      <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   setPictures([]);
      //   setInputSearchQuery(searchQuery);
      //   navigate("/gallery");
      // }}
      >
        <input
          className="navbar-form"
          //   ref={inputRef}
          //   placeholder="Search..."
          //   onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
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
      </form>
      <Link to="/user-profile">
        <div className="navbar-user-profile">
          <span>{/* {loginName[0]?.toUpperCase()} */}L</span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
