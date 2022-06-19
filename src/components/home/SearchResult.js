import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

//components
import ImageGallery from "../gallery/ImageGallery";

//hook
import { useFetch } from "../../hooks/useFetch";

const SearchResult = ({ query }) => {
  const [page, setPage] = useState(1);

  //EMPTY ARRAY

  const { data, loading, error } = useFetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${process.env.REACT_APP_API_KEY}`,
    query
  );

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      {query === "istanbul" ? (
        <h2 className="text-3xl font-semibold text-main-gray-text mt-36 my-6 text-center">
          Free Stocks Photo
        </h2>
      ) : (
        <h2 className="text-3xl font-semibold text-main-gray-text mt-36 my-6 text-center">
          Results for {query?.charAt(0).toUpperCase() + query?.slice(1)}
        </h2>
      )}
      {error && <div>An error happened. Please try again.</div>}
      {loading && <div>Loading...</div>}
      {data && (
        <InfiniteScroll
          next={() => setPage((prev) => prev + 1)}
          dataLength={data?.length}
          hasMore={true}
          scrollThreshold={0.8}
          endMessage={"It looks like you came to the end. 😒"}
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
