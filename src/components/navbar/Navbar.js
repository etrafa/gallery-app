import NavbarForHome from "./NavbarForHome";
import NavbarForOtherPages from "./NavbarForOtherPages";

const Navbar = ({ query, setQuery }) => {
  return window.location.pathname === "/" ? (
    <NavbarForHome setQuery={setQuery} />
  ) : (
    <NavbarForOtherPages setQuery={setQuery} />
  );
};

export default Navbar;
