import { useState } from "react";

//add new collection to firebase function
import {
  addNewCollectionToDB,
  useAuth,
} from "../../../firebase/firebaseConfig";

const NewCollectionModal = ({
  setCreateCollectionModal,
  setNewColectionPage,
}) => {
  //choose a new collection name
  const [newCollectionName, setNewCollectionName] = useState("");

  const currentUser = useAuth();

  return (
    <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12  md:w-8/12 lg:w-4/12 max-w-screen-md">
      <h3 className="mt-12 text-3xl font-bold text-center">
        Create new collection
      </h3>
      <span className="text-gray-700 ml-14 block mt-6">
        Collection title <span className="text-main-heart-red">*</span>
      </span>
      <input
        value={newCollectionName}
        onChange={(e) => setNewCollectionName(e.target.value)}
        className="border w-10/12 h-12 rounded-lg mx-12 block mt-2 pl-4 placeholder:text-lg"
        type="text"
        placeholder="Nature pictures..."
      />
      <div className="flex justify-center py-7">
        <button
          onClick={() => {
            setCreateCollectionModal(true);
            setNewColectionPage(false);
          }}
          className="border w-2/12 h-12 mx-4 rounded-lg font-bold tracking-wider hover:border-black"
        >
          Back
        </button>
        <button
          onClick={() => {
            addNewCollectionToDB(
              newCollectionName,
              setNewColectionPage,
              currentUser
            );
            setNewCollectionName("");
          }}
          className={
            newCollectionName
              ? "border w-5/12 h-12 mx-4 rounded-lg bg-green-400 hover:bg-green-600 text-white font-semibold tracking-wider"
              : "border w-5/12 h-12 mx-4 rounded-lg cursor-not-allowed bg-search-bg text-gray-400 font-semibold tracking-wider"
          }
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewCollectionModal;
