import NavbarForHome from "./NavbarForHome";
import NavbarForOtherPages from "./NavbarForOtherPages";

import { useLocation } from "react-router-dom";

const Navbar = ({ setQuery }) => {
  const location = useLocation();

  return location.pathname === "/" ? (
    <NavbarForHome setQuery={setQuery} />
  ) : (
    <NavbarForOtherPages setQuery={setQuery} />
  );
};

export default Navbar;
