import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components

//icons
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Navbar from "../navbar/Navbar";
import ImageGallery from "../gallery/ImageGallery";

//styling

const SearchResult = ({ query }) => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [pictures, setPictures] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [page, setPage] = useState(1);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  //fetching the api data

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${apiKey}`
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const pictureData = [...new Set(data.results)];
        setPictures((prev) => [...prev, ...pictureData]);
      });
  }, [page]);

  console.log(query);

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
          {pictures &&
            pictures.map((picture) => {
              return <ImageGallery props={picture} />;
              setIsFound(false);
            })}
          {isFound && (
            <h1 className=" text-3xl mt-40 mx-auto text-center font-bold">
              We're sorry. We couldn't find your search! 😢
            </h1>
          )}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

export default SearchResult;
