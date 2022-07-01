import React from "react";

const CollectionMessage = () => {
  return (
    <div className="flex justify-center mr-8 items-center text-center w-36 h-12 rounded-full absolute top-16 bg-zinc-100 animate-animationRightToLeft">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-green-500 fill-transparent "
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-green-500 font-bold text-lg ml-2">SAVED</h2>
    </div>
  );
};

export default CollectionMessage;
