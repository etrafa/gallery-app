import { useState } from "react";

import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineArrowDown,
} from "react-icons/ai";

const ImageGallery = ({
  props,
  index,
  setLargeImage,
  setUploaderImage,
  setIndex,
  setUploaderName,
}) => {
  const [heartIcon, setHeartIcon] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden">
        <img
          onClick={() => {
            setLargeImage(props.urls.full);
            setUploaderImage(props.user.profile_image.medium);
            setUploaderName(props.user.name);
            setIndex(index);
          }}
          className="cursor-pointer hover:opacity-80 mt-4"
          src={props.urls.regular}
          alt={props.user.name}
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
    </>
  );
};

export default ImageGallery;
