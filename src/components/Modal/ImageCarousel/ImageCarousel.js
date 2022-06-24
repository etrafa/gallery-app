//context api
import { useContext, useEffect, useState } from "react";
import { GalleryContext } from "../../Context/GalleryContext";

//components
import CarouselButtons from "./CarouselButtons";
import CarouselArrows from "./CarouselArrows";

const ImageCarousel = ({ setIsCarouselOpen, setCreateCollectionModal }) => {
  const { pictureInformation, setPictureInformation, imageArrayFetch } =
    useContext(GalleryContext);
  const [pictureIndex, setPictureIndex] = useState(pictureInformation?.listId);
  const [isLikedByUser, setIsLikedByUser] = useState();

  useEffect(() => {
    setPictureInformation(imageArrayFetch[pictureIndex]);
    if (pictureIndex >= imageArrayFetch.length || pictureIndex <= 0) {
      setPictureIndex(1);
    }

    if (imageArrayFetch[pictureIndex]?.liked_by_user === true) {
      setIsLikedByUser(true);
    } else if (imageArrayFetch[pictureIndex]?.liked_by_user === false) {
      setIsLikedByUser(false);
    }

    console.log(imageArrayFetch[pictureIndex], isLikedByUser);
  }, [pictureIndex]);

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-screen max-w-screen-2xl">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            onClick={() => setIsCarouselOpen(false)}
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <CarouselArrows setPictureIndex={setPictureIndex} />
        <div className="py-6 px-6 lg:px-8">
          <div className="w-full h-24 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex items-center">
              <img
                className="rounded-full"
                src={pictureInformation?.user.profile_image.medium}
                alt={pictureInformation?.user?.name}
              />
              <span className="ml-4 text-main-gray-text font-medium text-lg tracking-wide">
                {pictureInformation?.user?.name}
              </span>
            </div>
            <CarouselButtons
              setCreateCollectionModal={setCreateCollectionModal}
              imageArrayFetch={imageArrayFetch}
              pictureIndex={pictureIndex}
              isLikedByUser={isLikedByUser}
              setIsLikedByUser={setIsLikedByUser}
              pictureInformation={pictureInformation}
            />
          </div>

          <img
            className="mx-auto max-h-[calc(100vh_-_9rem)]"
            src={pictureInformation?.urls.regular}
            alt={pictureInformation?.alt_description}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
