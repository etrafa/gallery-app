import { Carousel, CarouselItem, Modal, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { GalleryContext } from "../Context/GalleryContext";
import "bootstrap/dist/css/bootstrap.min.css";

//styling
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const {
    pictures,
    galleryArrayIndex,
    setGalleryArrayIndex,
    uploaderNameModal,
    setUploaderNameModal,
    uploaderImageModal,
    setUploaderImageModal,
    lgShow,
    setLgShow,
  } = useContext(GalleryContext);

  const handleSelect = (selectedIndex, e) => {
    setGalleryArrayIndex(selectedIndex);
    setUploaderNameModal(pictures[selectedIndex].user.name);
    setUploaderImageModal(pictures[selectedIndex].user.profile_image.medium);
  };

  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}

      <Modal
        className="modal"
        size="xxl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="flex gap-2" id="example-modal-sizes-title-lg">
            <img className="rounded-full w-10 h-10" src={uploaderImageModal} />
            <p className="text-slate-600 pl-2 "> {uploaderNameModal}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel
            indicators={false}
            activeIndex={galleryArrayIndex}
            onSelect={handleSelect}
            interval={null}
          >
            {pictures.map((picture, index) => {
              return (
                <CarouselItem key={index} className="modal-image">
                  <img src={picture.urls.regular} alt="" />
                </CarouselItem>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageCarousel;
