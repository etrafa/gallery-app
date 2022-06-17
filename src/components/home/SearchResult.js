import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components
import ImageGallery from "../gallery/ImageGallery";

//hook
import { useFetch } from "../../hooks/useFetch";

const SearchResult = ({ query }) => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useFetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=minimal&client_id=${process.env.REACT_APP_API_KEY}`,
    page
  );

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-main-gray-text my-12">
        Free Stocks Photo
      </h2>
      {data && (
        <InfiniteScroll
          next={() => setPage((prev) => prev + 1)}
          dataLength={data?.length}
          hasMore={true}
          scrollThreshold={0.8}
        >
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid lg:w-5/6 mx-auto float-none h-full"
            columnClassName="my-masonry-grid_column p-4"
          >
            {data?.map((picture, index) => {
              return (
                <ImageGallery props={picture} listId={index} key={picture.id} />
              );
            })}
          </Masonry>
        </InfiniteScroll>
      )}
    </>
  );
};

export default SearchResult;
