import { useContext } from "react";
import { GalleryContext } from "../Context/GalleryContext";

const UserLikeCarouselArrows = () => {
  const { setDataIndex } = useContext(GalleryContext);

  return (
    <div>
      <svg
        onClick={() => setDataIndex((prev) => prev + 1)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 absolute top-1/2 transform translate-y-1/2 left-4 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <svg
        onClick={() => {
          setDataIndex((prev) => prev + 1);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 absolute top-1/2 transform translate-y-1/2 right-4 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

export default UserLikeCarouselArrows;
