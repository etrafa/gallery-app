import { useState, useContext, useEffect } from "react";
import {
  addDataToDB,
  removeDataFromDB,
  useAuth,
} from "../../firebase/firebaseConfig";

import { GalleryContext } from "../Context/GalleryContext";
import AddCollectionButtonForGallery from "./GalleryComponents/AddCollectionButtonForGallery";
import DownloadButtonForGallery from "./GalleryComponents/DownloadButtonForGallery";

const ImageGallery = ({ props, listId }) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const currentUser = useAuth();

  const {
    setIsCarouselOpen,
    pictureInformation,
    setPictureInformation,
    setCreateCollectionModal,
  } = useContext(GalleryContext);

  // add pictures user likes to their library

  const likeHandler = (item) => {
    setPictureInformation(item);
    if (!item?.liked_by_user) {
      item.liked_by_user = true;
      setHeartIcon(true);
      console.log(item.liked_by_user);
      addDataToDB(item, currentUser);
    } else {
      item.liked_by_user = false;
      setHeartIcon(false);
      console.log(item.liked_by_user);
      removeDataFromDB(item);
    }
  };

  return (
    <>
      {
        //! GALLERY SECTION FOR SMALL SCREEN */
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
              className="cursor-pointer hover:opacity-80 mt-1"
              src={props.urls.regular}
              alt={props.user.name}
            />

            <div className="flex mt-2 justify-between md:hidden">
              <div className="flex mb-8">
                <span
                  onClick={() => likeHandler(props)}
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
                <AddCollectionButtonForGallery
                  clickHandler={() => setCreateCollectionModal(true)}
                />
              </div>
              {/* download icon */}
              <DownloadButtonForGallery
                href={props?.urls?.regular}
                download={props?.urls?.regular}
              />
            </div>
          </div>
        </div>
      }

      {/* //! GALLERY SECTION FOR LARGE SCREEN */}
      <div className="gallery-large-screen">
        <div className="group relative overflow-hidden">
          <img
            onMouseEnter={() => setPictureInformation({ ...props })}
            onClick={() => {
              setIsCarouselOpen(true);
              setPictureInformation({ ...props, listId });
            }}
            className="cursor-pointer hover:opacity-80 mt-4"
            src={props.urls.regular}
            alt={props.user.name}
          />

          {/* //! SHOW DETAILED INFORMATION ABOUT IMAGE WHEN HOVER (FOR LARGE SCREEN) */}
          <div className="invisible group-hover:visible absolute top-6 right-2 flex justify-end">
            <span
              onClick={() => likeHandler(props)}
              className={
                heartIcon
                  ? "bg-heart-background w-10 h-7 pt-0.5 rounded-lg text-white cursor-pointer"
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
            <AddCollectionButtonForGallery
              clickHandler={() => setCreateCollectionModal(true)}
            />
          </div>
          {/* image author VISIBLE only with HOVER (for LARGE SCREEN) */}
          <div className="invisible group-hover:visible flex w-11/12 justify-between  absolute bottom-2 left-2 ">
            <div className="flex">
              <img
                className="rounded-full w-10 h-10 z-50"
                src={props.user.profile_image.medium}
                alt={`${props.name} profile`}
              />
              <p className=" text-white pt-2 pl-2">{props.user.name}</p>
            </div>
            <DownloadButtonForGallery
              href={props?.urls?.regular}
              download={props?.urls?.regular}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
