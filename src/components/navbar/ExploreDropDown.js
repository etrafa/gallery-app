import { useState } from "react";

const ExploreDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="relative group">
      <div
        onMouseEnter={() => setIsDropDownOpen(true)}
        onMouseLeave={() => setIsDropDownOpen(false)}
        className="flex items-center cursor-pointer text-slate-400 font-bold hover:text-slate-600 "
      >
        <span className="z-50">Explore</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 "
          viewBox="0 0 20 20"
          fill="gray"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="hidden group-hover:block absolute py-4 rounded-xl top-5 z-50 w-36 -left-8 h-auto bg-white text-center">
        <ul>
          <li className="pt-2">Travel</li>
          <li className="pt-2">Travel</li>
          <li className="pt-2">Travel</li>
          <li className="pt-2">Travel</li>
          <li className="pt-2">Travel</li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreDropDown;
