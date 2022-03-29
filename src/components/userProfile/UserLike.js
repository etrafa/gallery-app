import { useContext } from "react";
import ImageGallery from "../gallery/ImageGallery";
import { GalleryContext } from "../Context/GalleryContext";
import Masonry from "react-masonry-css";
import UserGallery from "../gallery/UserGallery";

const UserLike = () => {
  const { userLikeImage } = useContext(GalleryContext);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div>
      <h1 className="mt-12 text-center text-gray-700">
        Liked Pictures {`(${userLikeImage.length})`}
      </h1>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid lg:w-5/6 mx-auto mt-24 float-none h-full"
        columnClassName="my-masonry-grid_column p-4"
      >
        {userLikeImage.map((picture, index) => (
          <UserGallery props={picture} key={index} />
        ))}
      </Masonry>
    </div>
  );
};

export default UserLike;
