import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components
import Navbar from "../navbar/Navbar";
import ImageGallery from "./ImageGallery";

//styling
import "./Gallery.css";

const Gallery = ({ pictures, setPictures }) => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [page, setPage] = useState(1);

  //fetching the api data
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${apiKey}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        const pictureData = [...new Set(data.results)];
        setPictures((prev) => [...prev, ...pictureData]);
      });
  }, [page]);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
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
            <ImageGallery props={picture} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

export default Gallery;
