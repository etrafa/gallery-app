import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components
import Navbar from "../navbar/Navbar";
import Modal from "../Modal/Modal";

//icons
import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

//styling
import "./Gallery.css";

const Gallery = ({
  pictures,
  setPictures,
  setLargeImage,
  setUploaderImage,
  setUploaderName,
  setNextImage,
  nextSlide,
  setIndex,
}) => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [page, setPage] = useState(1);
  const [heartIcon, setHeartIcon] = useState(false);

  const styleHeartIcon = (id) => {
    setHeartIcon(
      pictures.find((item) => {
        if (id !== item.id) {
          setHeartIcon(!heartIcon);
        }
      })
    );
  };

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
            <div className="group relative overflow-hidden">
              <img
                onClick={() => {
                  setLargeImage(picture.urls.full);
                  setUploaderImage(picture.user.profile_image.medium);
                  setUploaderName(picture.user.name);
                  setIndex(index);
                }}
                className="cursor-pointer hover:opacity-80 mt-4"
                src={picture.urls.regular}
                alt={picture.user.name}
              />
              {/* image icons VISIBLE only with HOVER (for LARGE SCREEN) */}
              <div className="invisible group-hover:visible absolute top-6 right-2 flex justify-end">
                {/* heart icon */}
                <span
                  className={
                    heartIcon
                      ? " bg-heart-background w-10 h-7 pt-0.5 rounded-lg text-white cursor-pointer"
                      : "border-2 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer "
                  }
                >
                  <svg
                    className="mx-auto mt-1 h-4 w-4"
                    onClick={() => styleHeartIcon(picture.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      className="hover:fill-black"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </span>

                {/* add icon */}
                <span className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer ">
                  <AiOutlinePlus className="mx-auto mt-1 hover:fill-black " />
                </span>
              </div>
              {/* image author VISIBLE only with HOVER (for LARGE SCREEN) */}
              <div className="invisible group-hover:visible flex w-11/12 justify-between  absolute bottom-2 left-2 ">
                <div className="flex">
                  <img
                    className="rounded-full w-10 h-10"
                    src={picture.user.profile_image.medium}
                    alt={`${picture.name} profile`}
                  />
                  <p className=" text-white pt-2 pl-2 ">{picture.user.name}</p>
                </div>
                <span className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer">
                  <AiOutlineArrowDown className="mx-auto mt-1 hover:fill-black" />
                </span>
              </div>
            </div>
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

export default Gallery;
