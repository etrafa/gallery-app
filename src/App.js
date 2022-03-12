import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

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
  console.log(index);

  return (
    <Router>
      {largeImage && (
        <Modal
          largeImage={largeImage}
          setLargeImage={setLargeImage}
          uploaderImage={uploaderImage}
          uploaderName={uploaderName}
          setNextImage={setNextImage}
          nextImage={nextImage}
          index={index}
          setIndex={setIndex}
          pictures={pictures}
        />
      )}

      <Routes>
        <Route
          path="/gallery-app/"
          element={<Home query={query} setQuery={setQuery} />}
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              setLargeImage={setLargeImage}
              setUploaderImage={setUploaderImage}
              setUploaderName={setUploaderName}
              setNextImage={setNextImage}
              setIndex={setIndex}
              pictures={pictures}
              setPictures={setPictures}
            />
          }
        />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/search" element={<SearchResult query={query} />} />
        <Route
          path="asdsadasdas"
          element={
            <ImageGallery
              setLargeImage={setLargeImage}
              setUploaderImage={setUploaderImage}
              setUploaderName={setUploaderName}
              setNextImage={setNextImage}
              setIndex={setIndex}
              pictures={pictures}
              setPictures={setPictures}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
