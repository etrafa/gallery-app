import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db, useAuth } from "../../firebase/firebaseConfig";

const UserInformation = () => {
  const currentUser = useAuth();
  const [likedImageDB, setLikedImageDB] = useState();

  useEffect(() => {
    if (currentUser) {
      const getData = async () => {
        const collectionRef = collection(db, "likes");
        const q = query(collectionRef, where("uid", "==", currentUser?.uid));
        const res = await getDocs(q);

        setLikedImageDB(res.docs.map((item) => item.data()));
      };

      getData();
    }
  }, [currentUser]);

  return (
    <div className="">
      <div className="w-24 h-24 bg-green-500 mx-auto rounded-full flex justify-center items-center">
        <span className="text-white font-bold text-5xl">E</span>
      </div>
    </div>
  );
};

export default UserInformation;
