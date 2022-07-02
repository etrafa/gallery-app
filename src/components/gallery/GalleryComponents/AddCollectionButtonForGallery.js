import { AiOutlinePlus } from "react-icons/ai";

const AddCollectionButtonForGallery = (props) => {
  return (
    <span
      onClick={props.clickHandler}
      className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer "
    >
      <AiOutlinePlus className="mx-auto mt-1 hover:fill-black " />
    </span>
  );
};

export default AddCollectionButtonForGallery;
