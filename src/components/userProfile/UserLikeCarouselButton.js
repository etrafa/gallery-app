import { deleteLikedImageFromDB } from "../../firebase/firebaseConfig";

const UserLikeCarouselButton = ({ getSinglePic }) => {
  return (
    <div className="mr-12 flex items-center">
      <button
        onClick={() => console.log(getSinglePic?.id)}
        className="flex w-32 h-12 mx-4 border text-center rounded-xl items-center justify-center hover:bg-gray-100"
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span className="ml-1 text-main-gray-text font-semibold">Remove</span>
      </button>
      <button className="w-36 h-12 mx-4 bg-green-500 hover:bg-green-400 text-center text-white font-bold tracking-wider">
        Download
      </button>
    </div>
  );
};

export default UserLikeCarouselButton;
