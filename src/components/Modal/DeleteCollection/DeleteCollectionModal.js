import { useContext } from "react";
import {
  removeCollectionFromDB,
  useAuth,
} from "../../../firebase/firebaseConfig";
import { GalleryContext } from "../../Context/GalleryContext";

const DeleteCollectionModal = ({ setDeleteCollectionModal }) => {
  const { userCollectionName } = useContext(GalleryContext);
  const currentUser = useAuth();

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-90 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12  md:w-8/12 lg:w-4/12 max-w-screen-md">
        <h3 className="mt-12 text-3xl font-bold text-center px-12">
          Delete this collection?
        </h3>
        <svg
          onClick={() => setDeleteCollectionModal(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 absolute top-6 right-6 cursor-pointer hover:stroke-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="flex justify-around my-10">
          <button className="border w-36 h-12 rounded-full font-medium hover:text-gray-600 hover:border-gray-600">
            Cancel
          </button>
          <button
            onClick={() => {
              console.log(userCollectionName);
              removeCollectionFromDB(userCollectionName, currentUser);
            }}
            className="w-36 h-12 bg-red-500 border rounded-full text-white font-medium tracking-widest hover:bg-white hover:text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCollectionModal;
