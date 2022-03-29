// //styling
// import "./Modal.css";

// //components
// import GalleryIcons from "../gallery/GalleryIcons";

// import { GalleryContext } from "../Context/GalleryContext";
// import { useContext, useState } from "react";
// import { Modal, Button } from "react-bootstrap";

// const ImageModal = () => {
//   const {
//     pictures,
//     largeImage,
//     uploaderImageModal,
//     uploaderNameModal,
//     setUploaderImageModal,
//     setUploaderNameModal,
//     setGalleryArrayIndex,
//     galleryArrayIndex,
//     setLargeImage,
//     setNextImage,
//     nextImage,
//   } = useContext(GalleryContext);

//   const [show, setShow] = useState(false);

//   return (
//     // <div className="modal">
//     //   <div className="modal-container">
//     //     <div className="modal-body">
//     //       <div className="gallery-icons-modal">
//     //         <GalleryIcons />
//     //       </div>
//     //       <svg
//     //         onClick={() => {
//     //           setGalleryArrayIndex((prev) => prev - 1);
//     //           setNextImage(pictures[galleryArrayIndex]);
//     //           setLargeImage(nextImage?.urls?.full);
//     //           setUploaderImageModal(nextImage?.user?.profile_image?.large);
//     //           setUploaderNameModal(nextImage?.user?.name);
//     //         }}
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         className=" h-10 w-10 text-white modal-prev-button"
//     //         fill="none"
//     //         viewBox="0 0 24 24"
//     //         stroke="currentColor"
//     //         strokeWidth={2}
//     //       >
//     //         <path
//     //           strokeLinecap="round"
//     //           strokeLinejoin="round"
//     //           d="M15 19l-7-7 7-7"
//     //         />
//     //       </svg>
//     //       <img className="modal-large-image" src={largeImage} alt="" />
//     //       <svg
//     //         onClick={() => {
//     //           setGalleryArrayIndex((prev) => prev - 1);
//     //           setNextImage(pictures[galleryArrayIndex]);
//     //           setLargeImage(nextImage?.urls?.full);
//     //           setUploaderImageModal(nextImage?.user.profile_image?.large);
//     //           setUploaderNameModal(nextImage?.user?.name);
//     //         }}
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         className=" h-10 w-10 text-white modal-next-button"
//     //         fill="none"
//     //         viewBox="0 0 24 24"
//     //         stroke="currentColor"
//     //         strokeWidth={2}
//     //       >
//     //         <path
//     //           strokeLinecap="round"
//     //           strokeLinejoin="round"
//     //           d="M9 5l7 7-7 7"
//     //         />
//     //       </svg>
//     //       <div className="modal-uploader-informations">
//     //         <img className="rounded-full w-12 h-12 " src={uploaderImageModal} />
//     //         <p className="text-white mt-3 font-bold">{uploaderNameModal}</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//   );
// };

// export default ImageModal;
