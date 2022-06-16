// import { useContext, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GalleryContext } from "../Context/GalleryContext";

// //logo
// import Logo from "../navbar/assets/logo.png";

// //styling
// import "./Navbar.css";

// const Navbar = () => {
//   const {
//     searchQuery,
//     setInputSearchQuery,
//     setSearchQuery,
//     setPictures,
//     loginName,
//   } = useContext(GalleryContext);

//   const inputRef = useRef();
//   let navigate = useNavigate();

//   return (
//     <nav className="navbar fixed top-0 z-50">
//       <Link to="/gallery-app">
//         <img
//           src={Logo}
//           className="mr-3 h-10 sm:h-10 rounded-xl ml-2"
//           alt={`logo`}
//         />
//       </Link>

//       <form
//         className="icon-container"
//         onSubmit={(e) => {
//           e.preventDefault();
//           setPictures([]);
//           setInputSearchQuery(searchQuery);
//           navigate("/gallery");
//         }}
//       >
//         <input
//           className="pl-1"
//           ref={inputRef}
//           placeholder="Search..."
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>
//           <svg
//             className="w-8 h-8 text-gray-500"
//             fillRule="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//       </form>
//       <Link to="/user-profile">
//         <div className="bg-indigo-400 w-10 h-10 mr-2 rounded-3xl pl-2.5 pt-1 lg:mr-6 ">
//           <span className="text-white font-bold text-2xl pl-0.5 no-underline">
//             {loginName[0]?.toUpperCase()}
//           </span>
//         </div>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarComp from "./NavbarComp";

const Navbar = () => {
  //get PathName URL
  const pathURL = useLocation();

  const [pathName, setPathName] = useState();

  useEffect(() => {
    setPathName(pathURL.pathname);
  }, [pathName]);

  return <NavbarComp />;
};

export default Navbar;
