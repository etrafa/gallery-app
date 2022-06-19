//react router
import { useNavigate, useLocation } from "react-router-dom";

const ExploreDropDown = ({ color, setQuery }) => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    //CHANGE STYLE BASED ON HOME PAGE OR OTHER PAGES

    <div className="relative group hidden lg:block">
      {location.pathname === "/" ? (
        <div
          className={
            color
              ? "flex items-center cursor-pointer text-slate-400 font-bold hover:text-slate-600"
              : "flex items-center cursor-pointer text-white font-bold"
          }
        >
          <span className="z-50">Explore</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={color ? "h-5 w-5 fill-gray-500" : "h-5 w-5 fill-white"}
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div className="flex items-center cursor-pointer text-slate-400 font-bold hover:text-slate-600">
          <span className="z-50">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-gray-500"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="hidden group-hover:block absolute py-4 rounded-xl top-5 z-50 w-36 -left-8 h-auto bg-white text-center">
        <ul>
          <li
            onClick={() => {
              setQuery("Japan");
              navigate("/search/japan");
            }}
            className="pt-4 cursor-pointer hover:bg-gray-100"
          >
            Japan
          </li>
          <li
            onClick={() => {
              setQuery("forest");
              navigate("/search/forest");
            }}
            className="pt-4 cursor-pointer hover:bg-gray-100"
          >
            Forest
          </li>
          <li
            onClick={() => {
              setQuery("kitchen");
              navigate("/search/kitchen");
            }}
            className="pt-4 cursor-pointer hover:bg-gray-100"
          >
            Kitchen
          </li>
          <li
            onClick={() => {
              setQuery("antique");
              navigate("/search/antique");
            }}
            className="pt-4 cursor-pointer hover:bg-gray-100"
          >
            Antique
          </li>
          <li
            onClick={() => {
              setQuery("waterfall");
              navigate("/search/waterfall");
            }}
            className="pt-4 cursor-pointer hover:bg-gray-100"
          >
            Waterfall
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreDropDown;
