import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db, useAuth } from "../../firebase/firebaseConfig";
import { GalleryContext } from "../Context/GalleryContext";

const SingleCollectionPage = () => {
  const currentUser = useAuth();
  const [collectionImages, setCollectionImages] = useState(null);

  const { id } = useParams();

  const { setIsLikeCarouselOpen, dataIndex, setGetSinglePic, setDataIndex } =
    useContext(GalleryContext);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      data.map(async () => {
        const q = collection(db, `users/${currentUser.uid}/collection-images`);
        const userCollectionQ = query(q, where("fireCategory", "==", id));

        const unsub = onSnapshot(userCollectionQ, (snapshot) => {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push(doc.data());
          });
          setCollectionImages(result);
        });
        return () => unsub();
      });
    };
    getData();
  }, [currentUser, id]);

  useEffect(() => {
    setGetSinglePic(collectionImages && collectionImages[dataIndex]);
    if (dataIndex >= collectionImages?.length || dataIndex <= 0) {
      setDataIndex(0);
    }
    if (collectionImages) {
      if (collectionImages.length === 0) {
        setIsLikeCarouselOpen(false);
      }
    }
  }, [dataIndex]);

  return (
    <div className="mt-44">
      <h2 className="text-center text-5xl mt-24 my-12 text-main-gray-text font-bold">
        {id}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto gap-4">
        {collectionImages &&
          collectionImages.map((item) => (
            <img
              key={item.id}
              onClick={() => {
                setIsLikeCarouselOpen(true);
                setGetSinglePic(item);
              }}
              className="w-11/12 lg:w-full h-96 mx-auto my-2 cursor-pointer hover:opacity-80"
              src={item?.urls?.regular}
              alt={item?.alt_description}
            />
          ))}
      </div>
      {collectionImages && collectionImages.length === 0 && (
        <h2 className="text-center font-bold text-xl w-full text-gray-400 mt-24">
          No images for this collection yet. 😢
        </h2>
      )}
    </div>
  );
};

export default SingleCollectionPage;
