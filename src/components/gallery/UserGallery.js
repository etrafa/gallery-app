import { useState, useContext } from "react";
import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

import { GalleryContext } from "../Context/GalleryContext";

const UserGallery = ({ props, listId }) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const {
    setLargeImage,
    setGalleryArrayIndex,
    setUploaderImageModal,
    setUploaderNameModal,
    userLikeImage,
    setUserLikeImage,
    setShowModal,
  } = useContext(GalleryContext);

  // add pictures user likes to their library

  const styleHeartIcon = (id) => {
    // remove pictures user likes to their library
    if (heartIcon === false) {
      setUserLikeImage(
        userLikeImage.filter((image) => {
          return image.id !== id;
        })
      );
    }
  };

  return (
    <>
      {/* GALLERY SECTION FOR SMALL SCREEN */}
      <div className="gallery-small-screen">
        {/* user informations */}
        <div className="flex mb-2">
          <img
            className="rounded-full w-10 h-10"
            src={props.user.profile_image.medium}
            alt={`${props.name} profile`}
          />
          <p className=" text-black pt-2.5 pl-2 ">{props.user.name}</p>
        </div>

        <div className="group relative overflow-hidden">
          <img
            onClick={() => {
              setLargeImage(props.urls.full);
              setGalleryArrayIndex(listId);
              setUploaderImageModal(props.user.profile_image.large);
              setUploaderNameModal(props.user.name);
            }}
            className="cursor-pointer hover:opacity-80 mt-1"
            src={props.urls.regular}
            alt={props.user.name}
          />

          {/* image icons VISIBLE only with HOVER (for LARGE SCREEN) */}
          <div className="flex mt-2 justify-between md:hidden">
            {/* heart icon for LARGE SCREEN */}
            <div className="flex mb-8">
              <span
                onClick={() => styleHeartIcon(props.id)}
                className={
                  heartIcon
                    ? "border-2 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer "
                    : " bg-heart-background w-10 h-7 pt-0.5 rounded-lg text-white cursor-pointer"
                }
              >
                <svg
                  className="mx-auto mt-1 h-4 w-4"
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
            </div>
            {/* download icon */}
            <span className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer">
              <AiOutlineArrowDown className="mx-auto mt-1 hover:fill-black" />
            </span>
          </div>
        </div>
      </div>
      {/* GALLERY SECTION FOR LARGE SCREEN */}
      <div className="gallery-large-screen">
        <div className="group relative overflow-hidden">
          <img
            onClick={() => {
              setLargeImage(props.urls.full);
              setGalleryArrayIndex(listId);
              setUploaderImageModal(props.user.profile_image.large);
              setUploaderNameModal(props.user.name);
            }}
            className="cursor-pointer hover:opacity-80 mt-4"
            src={props.urls.regular}
            alt={props.user.name}
          />
          {/* image icons VISIBLE only with HOVER (for LARGE SCREEN) */}
          <div className="invisible group-hover:visible absolute top-6 right-2 flex justify-end">
            {/* heart icon */}
            <span
              onClick={() => styleHeartIcon(props.id)}
              className={
                heartIcon
                  ? "border-2 bg-icon-background w-10 h-7 rounded-lg text-icon-color cursor-pointer "
                  : "bg-heart-background w-10 h-7 pt-0.5 rounded-lg text-white cursor-pointer"
              }
            >
              <svg
                className="mx-auto mt-1 h-4 w-4"
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
          </div>
          {/* image author VISIBLE only with HOVER (for LARGE SCREEN) */}
          <div className="invisible group-hover:visible flex w-11/12 justify-between  absolute bottom-2 left-2 ">
            <div className="flex">
              <img
                className="rounded-full w-10 h-10"
                src={props.user.profile_image.medium}
                alt={`${props.name} profile`}
              />
              <p className=" text-white pt-2 pl-2 ">{props.user.name}</p>
            </div>
            <span className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer">
              <AiOutlineArrowDown className="mx-auto mt-1 hover:fill-black" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserGallery;
