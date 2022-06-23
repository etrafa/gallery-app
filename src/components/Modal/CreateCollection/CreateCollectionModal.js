import { Link } from "react-router-dom";
import CollectionInformation from "./CollectionInformation";

const CreateCollectionModal = ({ setCreateCollectionModal }) => {
  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-7/12 min-h-screen lg:min-h-fit max-w-screen-lg">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            onClick={() => setCreateCollectionModal(false)}
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <h3 className="mt-12 mb-4 text-3xl font-bold text-center">
          Save to Collection
        </h3>
        <Link to="/">
          <span className="flex justify-center text-gray-400 underline underline-offset-1 hover:text-gray-600">
            All collections
          </span>
        </Link>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full my-4 pt-1 lg:h-96 overflow-auto">
          <CollectionInformation name="Create" />
          <CollectionInformation name="Forest" />
          <CollectionInformation name="Japanese" />
          <CollectionInformation name="Coffee" />
          <CollectionInformation name="Tea" />
          <CollectionInformation name="Michigan" />
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionModal;
