//firebase
import {
  query,
  getDocs,
  collection,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db, useAuth } from "../firebase/firebaseConfig";

//react
import { useEffect, useState } from "react";

export const useGetDocument = (collectionName, currentUser) => {
  const [likedImageDB, setLikedImageDB] = useState();

  useEffect(() => {
    if (currentUser) {
      const getData = async () => {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where("uid", "==", currentUser?.uid));
        const res = await getDocs(q);
        setLikedImageDB(res.docs.map((item) => item.data()));
      };

      getData();
    }
  }, [currentUser]);
  return likedImageDB;
};
