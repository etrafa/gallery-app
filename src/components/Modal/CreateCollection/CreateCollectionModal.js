//components
import CollectionInformation from "./CollectionInformation";
import NewCollectionModal from "./NewCollectionModal";

//react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db, useAuth } from "../../../firebase/firebaseConfig";

const CreateCollectionModal = ({
  setCreateCollectionModal,
  setIsCarouselOpen,
}) => {
  //this state will open when user wants to create new collection
  const [newCollectionPage, setNewColectionPage] = useState(false);

  //get the collection data from the db
  const [userCollections, setUserCollections] = useState([]);

  const currentUser = useAuth();

  useEffect(() => {
    const getData = async (user) => {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      data.map(async () => {
        const userCollectionQ = query(
          collection(db, `users/${currentUser.uid}/collections`)
        );
        const collectionDetails = await getDocs(userCollectionQ);
        const likeInfo = collectionDetails.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserCollections(likeInfo);
      });
    };
    getData();
  }, [currentUser]);

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-90 z-50">
      <NewCollectionModal
        setCreateCollectionModal={setCreateCollectionModal}
        setNewColectionPage={setNewColectionPage}
      />
      <div
        className={
          newCollectionPage
            ? "hidden"
            : "absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-7/12 min-h-screen lg:min-h-fit max-w-screen-lg"
        }
      >
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
        <Link to="/user-profile">
          <span
            onClick={() => {
              setIsCarouselOpen(false);
              setCreateCollectionModal(false);
            }}
            className="flex justify-center text-gray-400 underline underline-offset-1 hover:text-gray-600"
          >
            All collections
          </span>
        </Link>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full my-4 pt-1 lg:h-96 overflow-auto">
          <CollectionInformation
            name="Create"
            clickHandler={() => setNewColectionPage(true)}
          />
          {userCollections &&
            userCollections.map((item) => (
              <CollectionInformation name={item?.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionModal;
