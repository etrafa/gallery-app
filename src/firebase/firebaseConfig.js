import { initializeApp } from "firebase/app";

//firebase firestore
import { deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";

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
const db = getFirestore(app);

//signup
export const signUp = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: name });
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
  modal(false);
};

//logout

export const logOut = async () => {
  await signOut(auth);
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
export const addDataToDB = async (collectionName, props) => {
  await setDoc(doc(db, collectionName, props.id), { ...props });
};

//remove data from the database
export const removeDataFromDB = async (collectionName, props) => {
  await deleteDoc(doc(db, collectionName, props.id));
};
