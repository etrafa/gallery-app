import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useAuth, db } from "../../firebase/firebaseConfig";

import { GalleryContext } from "../Context/GalleryContext";

const UserLike = () => {
  const {
    setIsLikeCarouselOpen,
    getSinglePic,
    dataIndex,
    setGetSinglePic,
    setDataIndex,
  } = useContext(GalleryContext);

  const [likedImagesDB, setLikedImagesDB] = useState([]);
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
        const likesQ = query(collection(db, `users/${currentUser.uid}/likes`));
        const likesDetails = await getDocs(likesQ);
        const likeInfo = likesDetails.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLikedImagesDB(likeInfo);
      });
    };
    getData();
  }, [currentUser]);

  useEffect(() => {
    setGetSinglePic(likedImagesDB[dataIndex]);
    if (dataIndex >= likedImagesDB.length || dataIndex <= 0) {
      setDataIndex(1);
    }
  }, [dataIndex]);

  return (
    <div>
      <h1 className="mt-36 my-12 font-bold text-center text-4xl">
        Liked Images ({likedImagesDB && likedImagesDB.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl mx-auto gap-4">
        {likedImagesDB &&
          likedImagesDB.map((item) => (
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
    </div>
  );
};

export default UserLike;
