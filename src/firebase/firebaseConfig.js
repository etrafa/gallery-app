import { initializeApp } from "firebase/app";

//firebase firestore
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";

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
  updateCurrentUser,
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
    await setDoc(doc(db, "users", userID), { id: userID });
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
  await setDoc(doc(db, "users", userID), { id: userID });
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

//add data to the database
export const addDataToDB = async (props, user) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async (v) => {
    await setDoc(doc(db, `users/${user.uid}/likes`, props.id), {
      ...props,
    });
  });
};

//remove data from the database
export const removeDataFromDB = async (props) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async (v) => {
    await deleteDoc(doc(db, `users/${v.id}/likes`, props.id));
  });
};

//create a new collection
export const addNewCollectionToDB = async (collectionName, modal, userID) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async () => {
    await setDoc(doc(db, `users/${userID.uid}/collections/`, collectionName), {
      id: collectionName,
    });
  });
  modal(false);
};

//remove collection from database
export const removeCollectionFromDB = async (props, user, modal) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async (v) => {
    await deleteDoc(doc(db, `users/${user?.uid}/collections`, props));
    modal(false);
  });
};

//add image to the collection
export const addImageToCollection = async (user, colName, props) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async () => {
    const newRef = doc(
      collection(db, `users/${user.uid}/collections/${colName?.id}`, props.id)
    );
    await setDoc(newRef, {
      ...props,
    });
  });
};

//remove image from the collection

//show collection images on UI
