import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { GalleryContext } from "./components/Context/GalleryContext";

//components
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import UserProfile from "./components/userProfile/UserProfile";
import SearchResult from "./components/home/SearchResult";
import Modal from "./components/Modal/Modal";
import ImageGallery from "./components/gallery/ImageGallery";

function App() {
  const [query, setQuery] = useState(undefined);
  const [largeImage, setLargeImage] = useState(null);
  const [uploaderImage, setUploaderImage] = useState(null);
  const [uploaderName, setUploaderName] = useState(null);
  const [nextImage, setNextImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/gallery-app"
          element={<Home query={query} setQuery={setQuery} />}
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              setLargeImage={setLargeImage}
              largeImage={largeImage}
              setUploaderImage={setUploaderImage}
              setUploaderName={setUploaderName}
              setNextImage={setNextImage}
              setIndex={setIndex}
              pictures={pictures}
              setPictures={setPictures}
              setToggleModal={setToggleModal}
            />
          }
        />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/search" element={<SearchResult query={query} />} />
        <Route
          element={
            <ImageGallery
              // setLargeImage={setLargeImage}
              // setUploaderImage={setUploaderImage}
              // setUploaderName={setUploaderName}
              // setNextImage={setNextImage}
              // setIndex={setIndex}
              // pictures={pictures}
              // setPictures={setPictures}
              largeImage={largeImage}
              setLargeImage={setLargeImage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
