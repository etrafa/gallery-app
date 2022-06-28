import { initializeApp } from "firebase/app";

//firebase firestore
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";

import {
  getDatabase,
  set,
  ref,
  remove,
  onValue,
  get,
  child,
} from "firebase/database";

//firebase auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//signup
export const signUp = async (email, password, name) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const userID = auth?.currentUser?.uid;
    // await setDoc(doc(db, "users", userID), { id: userID });

    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

//signin with Email

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

//signin with facebook

export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  await signInWithPopup(auth, provider);
  console.log(signInWithPopup);
};

//signin with google
export const signInWithGoogle = async (modal) => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
  const userID = auth?.currentUser?.uid;
  // await setDoc(doc(db, "users", userID), { id: userID });
  window.location.reload();
  modal(false);
};

//logout

export const logOut = async () => {
  await signOut(auth);
  window.location.reload();
};

//authChange
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};

//create a new collection
export const addNewCollectionToDB = async (collectionName, modal, user) => {
  const collectionRef = collection(db, collectionName);
  await addDoc(collectionRef, { uid: user.uid });
  modal(false);
};

//save users to the database
export const saveUserToDB = async () => {
  const db = getDatabase();
  const userID = auth?.currentUser?.uid;
  await set(ref(db, "users/" + userID), {
    uid: userID,
  });
};

//save user's liked image to the database
export const saveLikedImageToDB = async (props) => {
  const db = getDatabase();
  const userID = auth?.currentUser?.uid;
  await set(ref(db, "users/" + userID + "/likes/" + props.id), {
    ...props,
  });
};

//delete user's liked image from the database
export const deleteLikedImageFromDB = async (props) => {
  const db = getDatabase();
  const userID = auth?.currentUser?.uid;
  await remove(ref(db, "users/" + userID + "/likes/" + props.id));
};

//show user's liked image on the UI
// export const useShowLikedImageFromDB = async () => {
//   const [data, setData] = useState();
//   const dbRef = getDatabase();
//   const currentUser = useAuth();
//   let results = [];
//   const ref2 = ref(dbRef, "users/" + currentUser?.uid + "/likes");

//   onValue(ref2, (pixel) => {
//     pixel.forEach((doc) => {
//       results.push(doc.val());
//       console.log(results);
//     });
//   });

//   return { results };
// };

//show user's liked image on the UI
export const useShowLikedImageFromDB = () => {
  const [data, setData] = useState([]);
  let results = [];
  const controller = new AbortController();
  const signal = controller.signal;
  const dbRef = ref(getDatabase());
  const currentUser = useAuth();
  useEffect(() => {
    let isMounted = true;
    get(child(dbRef, "users/" + currentUser?.uid + "/likes"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((item) => {
            results.push(item.val());
          });
          if (isMounted) {
            setData(results);
          }
        } else {
          console.log("No data available");
        }
      })

      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [results, results.length]);

  return { data };
};
