import React, { useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components
import Navbar from "../navbar/Navbar";
import ImageGallery from "./ImageGallery";
import { GalleryContext } from "../Context/GalleryContext";

//styling
import "./Gallery.css";

const Gallery = ({ pictures, setPictures }) => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [page, setPage] = useState(1);
  const { inputSearchQuery } = useContext(GalleryContext);
  const [searchIsFound, setSearchIsFound] = useState(true);

  //fetching the api data
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${inputSearchQuery}&client_id=${apiKey}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const pictureData = data.results;
        const pictureArray = [...new Set(pictureData)];
        setPictures((prev) => [...prev, ...pictureArray]);
        if (data?.results?.length > 1) setSearchIsFound(false);
        else setSearchIsFound(true);
      });
  }, [page, inputSearchQuery]);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      {searchIsFound && (
        <h1 className="text-3xl mt-40 mx-auto text-center font-bold leading-loose">
          No results. Please try again with different keywords!
        </h1>
      )}
      <InfiniteScroll
        dataLength={pictures.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        scrollThreshold={0.8}
      >
        <Navbar />
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid lg:w-5/6 mx-auto mt-24 float-none h-full"
          columnClassName="my-masonry-grid_column p-4"
        >
          {pictures.map((picture, index) => (
            <ImageGallery props={picture} listId={index} key={index} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

export default Gallery
