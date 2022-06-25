import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//context api
import { GalleryContext } from "./components/Context/GalleryContext";

//components
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import UserProfile from "./components/userProfile/UserProfile";
import SearchResult from "./components/home/SearchResult";
import ImageGallery from "./components/gallery/ImageGallery";
import ImageCarousel from "./components/Modal/ImageCarousel/ImageCarousel";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/Modal/LoginModal/LoginModal";
import CreateCollectionModal from "./components/Modal/CreateCollection/CreateCollectionModal";

function App() {
  const [query, setQuery] = useState(undefined);
  const [largeImage, setLargeImage] = useState(null);
  const [uploaderImageModal, setUploaderImageModal] = useState(null);
  const [uploaderNameModal, setUploaderNameModal] = useState(null);
  const [nextImage, setNextImage] = useState(null);
  const [galleryArrayIndex, setGalleryArrayIndex] = useState(undefined);
  const [pictures, setPictures] = useState([]);
  const [loginName, setLoginName] = useState("");
  const [userName, setUserName] = useState("");
  const [searchQuery, setSearchQuery] = useState("messi");
  const [inputSearchQuery, setInputSearchQuery] = useState("messi");
  const [userLikeImage, setUserLikeImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [createCollectionModal, setCreateCollectionModal] = useState(false);
  const [pictureInformation, setPictureInformation] = useState();
  const [imageArrayFetch, setImageArrayFetch] = useState([]);

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
        setOpenLoginModal,
        setIsCarouselOpen,
        pictureInformation,
        setPictureInformation,
        imageArrayFetch,
        setImageArrayFetch,
      }}
    >
      <Router>
        <Navbar query={query} setQuery={setQuery} />
        {isCarouselOpen && (
          <ImageCarousel
            setCreateCollectionModal={setCreateCollectionModal}
            setIsCarouselOpen={setIsCarouselOpen}
          />
        )}
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {createCollectionModal && (
          <CreateCollectionModal
            setCreateCollectionModal={setCreateCollectionModal}
          />
        )}
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
          {/* <Route path="/search" element={<SearchResult query={query} />} /> */}
          <Route
            path="/search/:query"
            element={<SearchResult query={query} />}
          />
          <Route element={<ImageGallery />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </GalleryContext.Provider>
  );
}

export default App;
