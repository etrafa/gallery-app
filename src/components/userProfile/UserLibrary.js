import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { db, useAuth } from "../../firebase/firebaseConfig";
import { GalleryContext } from "../Context/GalleryContext";
import { Link } from "react-router-dom";

const UserLibrary = () => {
  const [userCollections, setUserCollections] = useState([]);

  const { setDeleteCollectionModal, setUserCollectionName } =
    useContext(GalleryContext);

  const currentUser = useAuth();

  useEffect(() => {
    const getData = async () => {
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

        const unsub = onSnapshot(userCollectionQ, (snapshot) => {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push(doc.data());
          });
          setUserCollections(result);
        });
        return () => unsub();
      });
    };
    getData();
  }, [currentUser]);

  return (
    <section>
      {userCollections.length === 0 && (
        <h1 className="text-4xl text-center mt-36 font-bold  leading-loose">
          We couldn't find any collections. 😢
        </h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl justify-between gap-12 mx-auto my-12">
        {userCollections &&
          userCollections.map((doc) => (
            <div className="relative w-80 h-80  border mx-auto rounded-xl cursor-pointer">
              <Link to={`/collections/${doc.id}`}>
                <div className="w-80 h-80 flex items-center justify-center">
                  <h2 className="text-center text-3xl">{doc?.id}</h2>
                </div>
              </Link>
              <svg
                onClick={() => {
                  setDeleteCollectionModal(true);
                  setUserCollectionName(doc?.id);
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute bottom-4 right-4 hover:stroke-black"
                fill="none"
                e
                viewBox="0 0 24 24"
                stroke="gray"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          ))}
      </div>
    </section>
  );
};

export default UserLibrary;
