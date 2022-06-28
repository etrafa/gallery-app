import { useState, useEffect } from "react";
import { useContext } from "react";
import { useShowLikedImageFromDB } from "../../firebase/firebaseConfig";
import { GalleryContext } from "../Context/GalleryContext";

const UserLike = () => {
  const { data } = useShowLikedImageFromDB();
  const {
    setIsLikeCarouselOpen,
    getSinglePic,
    dataIndex,
    setGetSinglePic,
    setDataIndex,
  } = useContext(GalleryContext);

  useEffect(() => {
    setGetSinglePic(data[dataIndex]);
    if (dataIndex >= data.length || dataIndex <= 0) {
      setDataIndex(1);
    }
  }, [dataIndex]);

  return (
    <div>
      <h2 className="text-center text-2xl mt-16 text-main-gray-text">
        Liked Images <span>({data && data.length})</span>
      </h2>
      <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-auto gap-4 max-w-screen-2xl">
        {data &&
          data.map((item, index) => (
            <img
              key={index}
              onClick={() => {
                setIsLikeCarouselOpen(true);
                setDataIndex(index);
                setGetSinglePic(data[index]);
                console.log(getSinglePic);
                console.log(dataIndex);
              }}
              className="mx-auto w-96 h-96 cursor-pointer hover:opacity-70"
              src={item?.urls?.small}
              alt={item?.alt_description}
            />
          ))}
      </div>
    </div>
  );
};

export default UserLike;
