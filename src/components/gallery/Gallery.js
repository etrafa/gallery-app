import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//components

//icons
import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
import Navbar from "../navbar/Navbar";

//styling

const Gallery = () => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [pictures, setPictures] = useState([]);
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
        const pictureData = [...new Set(data.results)];
        setPictures((prev) => [...prev, ...pictureData]);
      });
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={pictures.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={true}
    >
      <Navbar />
      <div className="columns-1 lg:columns-3 lg:w-5/6 mx-auto gap-8 space-y-4 mt-24">
        {pictures.map((picture) => (
          <div key={picture.id}>
            <div className="flex p-2 lg:hidden lg:hover:visible">
              <img
                className="rounded-full w-10 h-10"
                src={picture.user.profile_image.medium}
                alt={`${picture.name} profile`}
              />
              <span className="pt-2 pl-2">{picture.user.name}</span>
            </div>
            <img className="" src={picture.urls.regular} />

            {/* //icons for small devices// */}
            <div className="flex mt-2 pl-2 mb-8 lg:hidden">
              <AiOutlineHeart className="w-8 h-8 text-gray-600" />
              <AiOutlinePlus className="w-8 h-8 ml-2 text-gray-600 " />
              <button className="w-40 border ml-auto mr-4">Download</button>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
