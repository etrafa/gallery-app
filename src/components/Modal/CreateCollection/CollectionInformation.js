const CollectionInformation = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      className="w-40 h-40 bg-search-bg rounded-lg relative hover:scale-105 mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 fill-search-bg"
        viewBox="0 0 24 24"
        stroke="gray"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        {props.name}
      </p>
    </button>
  );
};

export default CollectionInformation;
