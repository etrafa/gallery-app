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

// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// //components

// //icons
// import { AiOutlineHeart, AiOutlinePlus } from "react-icons/ai";
// import Navbar from "../navbar/Navbar";

// //styling

// const Gallery = () => {
//   const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
//   const [pictures, setPictures] = useState([]);
//   const [page, setPage] = useState(1);

//   //fetching the api data

//   useEffect(() => {
//     fetch(
//       `https://api.unsplash.com/search/photos?page=${page}&query=office&client_id=${apiKey}`
//     )
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((data) => {
//         const pictureData = [...new Set(data.results)];
//         setPictures((prev) => [...prev, ...pictureData]);
//       });
//   }, [page]);

//   return (
//     <InfiniteScroll
//       dataLength={pictures.length}
//       next={() => setPage((prev) => prev + 1)}
//       hasMore={true}
//     >
//       <Navbar />
//       <div className="grid grid-cols-fluid grid-rows-auto-fit gap-12 w-3/4 mx-auto mt-24">
//         {pictures.map((picture) => (
//           <div key={picture.id}>
//             <div className="flex p-2 lg:hidden lg:hover:visible">
//               <img
//                 className="rounded-full w-10 h-10"
//                 src={picture.user.profile_image.medium}
//                 alt={`${picture.name} profile`}
//               />
//               <span className="pt-2 pl-2">{picture.user.name}</span>
//             </div>
//             <img className=" max-h-96 w-full  " src={picture.urls.regular} />

//             {/* //icons for small devices// */}
//             <div className="flex mt-2 pl-2 mb-8 lg:hidden">
//               <AiOutlineHeart className="w-8 h-8 text-gray-600" />
//               <AiOutlinePlus className="w-8 h-8 ml-2 text-gray-600 " />
//               <button className="w-40 border ml-auto mr-4">Download</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </InfiniteScroll>
//   );
// };

// export default Gallery;










import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ImageList, ImageListItem } from "@mui/material";

//components
import Navbar from "../navbar/Navbar";

//icons
import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

//styling
import "./Gallery.css";

const Gallery = () => {
  const apiKey = "cI86sWJtLf-QfrOGRr71mwxCDxz0xY1Lr7sC4Ae66yw";
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [heartIcon, setHeartIcon] = useState(false);

  const styleHeartIcon = () => {
    setHeartIcon(!heartIcon);
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

  return (
    <>
      <InfiniteScroll
        dataLength={pictures.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        scrollThreshold={1}
      >
        <Navbar />
        <ImageList
          className="lg:w-4/6 mx-auto mt-24  float-none h-full"
          variant="masonry"
          cols={3}
          gap={8}
        >
          {pictures.map((picture) => (
            <ImageListItem className="group" key={picture.id}>
              <img
                className="cursor-pointer hover:opacity-80"
                src={picture.urls.regular}
                alt={picture.user.name}
              />

              {/* image icons VISIBLE only with HOVER (for LARGE SCREEN) */}
              <div className="invisible group-hover:visible absolute top-2 right-2 flex justify-end">
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
                    onClick={styleHeartIcon}
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
                  <p className=" text-white pt-5 pl-2 ">{picture.user.name}</p>
                </div>
                <a href={picture.links.download} download>
                  <AiOutlineArrowDown className="border-2 mt-1 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer " />
                </a>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
    </>
  );
};

export default Gallery;
