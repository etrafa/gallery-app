const CarouselButtons = ({
  pictureInformation,
  isLikedByUser,
  setIsLikedByUser,
}) => {
  return (
    <div className="mr-12 flex items-center">
      <button className="flex w-24 h-12 mx-4 border text-center rounded-xl items-center justify-center hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        <span className="ml-1 text-main-gray-text font-semibold">Save</span>
      </button>
      <button
        onClick={() => console.log("hey")}
        className="flex w-24 h-12 mx-4 border text-center rounded-xl items-center justify-center hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="ml-1 text-main-gray-text font-semibold">Like</span>
      </button>
      <a
        target="_blank"
        rel="noreferrer"
        href={pictureInformation?.urls?.full}
        download={pictureInformation?.urls?.full}
      >
        <button className="w-36 h-12 mx-4 bg-green-500 hover:bg-green-400 text-center text-white font-bold tracking-wider">
          Download
        </button>
      </a>
    </div>
  );
};
// pictureInformation?.links?.download
export default CarouselButtons;
