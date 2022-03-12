//styling
import "./Modal.css";

//components
import GalleryIcons from "../gallery/GalleryIcons";

const Modal = ({
  pictures,
  largeImage,
  uploaderImage,
  setLargeImage,
  uploaderName,
  nextImage,
  setNextImage,
  index,
  setIndex,
}) => {
  return (
    <div className="relative bg-slate-800 w-5/6 mx-auto min-h-screen mt-24">
      <GalleryIcons />
      <svg
        onClick={() => {
          setIndex((prev) => prev - 1);
          setNextImage(pictures[index]);
          setLargeImage(nextImage.urls.full);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-10 w-10 text-white top-1/2 left-6 cursor-pointer"
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
      <img className="w-9/12 mx-auto pt-24" src={largeImage} alt="" />
      <svg
        onClick={() => {
          setIndex((prev) => prev + 1);
          setNextImage(pictures[index]);
          setLargeImage(nextImage.urls.full);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-10 w-10 text-white top-1/2 right-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <div className="flex absolute top-4 left-2">
        <img className="rounded-full w-12 h-12 ml-4" src={uploaderImage} />
        <p className="text-white mt-4 ml-3">{uploaderName}</p>
      </div>
    </div>
  );
};

export default Modal;
