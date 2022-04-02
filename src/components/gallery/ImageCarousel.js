import { useContext, useState } from "react";
import { GalleryContext } from "../Context/GalleryContext";
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

//styling
import "./ImageCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageCarousel = () => {
  const {
    pictures,
    galleryArrayIndex,
    setGalleryArrayIndex,
    uploaderNameModal,
    setUploaderNameModal,
    uploaderImageModal,
    setUploaderImageModal,
    showModal,
    setShowModal,
  } = useContext(GalleryContext);

  return (
    <>
      {showModal && (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
                  initialSlide={galleryArrayIndex}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  onSlideNextTransitionStart={() => {
                    console.log(galleryArrayIndex);
                    setGalleryArrayIndex((prev) => prev + 1);
                    setUploaderNameModal(
                      pictures[galleryArrayIndex]?.user?.name
                    );
                    setUploaderImageModal(
                      pictures[galleryArrayIndex].user.profile_image.large
                    );
                  }}
                  onSlidePrevTransitionStart={() => {
                    setGalleryArrayIndex((prev) => prev - 1);
                    setUploaderNameModal(
                      pictures[galleryArrayIndex]?.user?.name
                    );
                    setUploaderImageModal(
                      pictures[galleryArrayIndex].user.profile_image.large
                    );
                    console.log(galleryArrayIndex);
                  }}
                  className="mt-24"
                  style={{
                    width: "450px",
                    height: "600px",
                    marginTop: "50px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 19px 0px rgba(0,0,0,0.24)",
                  }}
                  autoplay={false}
                >
                  {pictures.map((picture, index) => {
                    return (
                      <SwiperSlide virtualIndex={index} key={index}>
                        <img
                          className="mt-24"
                          src={picture.urls.regular}
                          alt=""
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {/*body*/}
                <div className="relative p-6 flex-auto flex">
                  <img
                    className="w-20 border-4 rounded-lg"
                    src={uploaderImageModal}
                    alt=""
                  />
                  <span className="text-slate-600 pt-8 mx-auto">
                    {uploaderNameModal}
                  </span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
