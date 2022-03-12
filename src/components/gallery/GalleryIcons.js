//icons
import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

const GalleryIcons = () => {
  return (
    /* image icons VISIBLE only with HOVER (for LARGE SCREEN) */
    <div className="absolute top-6 right-12 flex justify-end">
      {/* heart icon */}
      <span
        className="border-2 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer"
        // className={
        //   heartIcon
        //     ? " bg-heart-background w-10 h-7 pt-0.5 rounded-lg text-white cursor-pointer"
        //     : "border-2 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer "
        // }
      >
        <svg
          className="mx-auto mt-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            className="hover:fill-black"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
      </span>

      {/* add icon */}
      <span className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer ">
        <AiOutlinePlus className="mx-auto mt-1 hover:fill-black " />
      </span>

      {/* download button for large screen */}
      <button className=" border-2 shadow-xl ml-2 bg-icon-background w-24  h-7   text-icon-color cursor-pointer">
        Download
      </button>
    </div>
  );
};

export default GalleryIcons;
