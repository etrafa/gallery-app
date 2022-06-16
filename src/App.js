import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { GalleryContext } from "./components/Context/GalleryContext";

//components
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import UserProfile from "./components/userProfile/UserProfile";
import SearchResult from "./components/home/SearchResult";
import ImageGallery from "./components/gallery/ImageGallery";
import UserNameModal from "./components/userProfile/UserNameModal";
import ImageCarousel from "./components/gallery/ImageCarousel";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [query, setQuery] = useState(undefined);
  const [largeImage, setLargeImage] = useState(null);
  const [uploaderImageModal, setUploaderImageModal] = useState(null);
  const [uploaderNameModal, setUploaderNameModal] = useState(null);
  const [nextImage, setNextImage] = useState(null);
  const [galleryArrayIndex, setGalleryArrayIndex] = useState(undefined);
  const [pictures, setPictures] = useState([]);
  const [loginName, setLoginName] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(true);
  const [userName, setUserName] = useState("");
  const [searchQuery, setSearchQuery] = useState("messi");
  const [inputSearchQuery, setInputSearchQuery] = useState("messi");
  const [userLikeImage, setUserLikeImage] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  }, []);

  return (
    <GalleryContext.Provider
      value={{
        largeImage,
        setLargeImage,
        galleryArrayIndex,
        setGalleryArrayIndex,
        pictures,
        setPictures,
        uploaderImageModal,
        setUploaderImageModal,
        uploaderNameModal,
        setUploaderNameModal,
        nextImage,
        setNextImage,
        loginName,
        setLoginName,
        openLoginModal,
        setOpenLoginModal,
        userName,
        setUserName,
        searchQuery,
        setSearchQuery,
        inputSearchQuery,
        setInputSearchQuery,
        userLikeImage,
        setUserLikeImage,
        showModal,
        setShowModal,
      }}
    >
      <Router>
        {/* {largeImage && <ImageModal />} */}
        {largeImage && <ImageCarousel />}
        {/* {openLoginModal && <UserNameModal />} */}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home query={query} setQuery={setQuery} />}
          />
          <Route
            path="/gallery"
            element={<Gallery pictures={pictures} setPictures={setPictures} />}
          />
          {/* <Route path="/user-profile" element={<UserProfile />} /> */}
          <Route path="/search" element={<SearchResult query={query} />} />
          <Route element={<ImageGallery />} />
        </Routes>
      </Router>
    </GalleryContext.Provider>
  );
}

export default App;
