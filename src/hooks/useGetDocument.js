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

export const useGetDocument = (collectionName) => {
  const { currentUser } = useAuth();
  const [getDocData, setGetDocData] = useState([]);

  useEffect(() => {
    console.log(currentUser);
    console.log(collectionName);
  }, [currentUser]);
};
