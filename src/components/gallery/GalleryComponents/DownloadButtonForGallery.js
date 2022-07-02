import { AiOutlineArrowDown } from "react-icons/ai";

const DownloadButtonForGallery = (props) => {
  return (
    <a
      className="border-2 ml-2 bg-icon-background w-10 h-7  rounded-lg text-icon-color cursor-pointer"
      target="_blank"
      rel="noreferrer"
      href={props.href}
      download={props.download}
    >
      <AiOutlineArrowDown className="mx-auto mt-1 hover:fill-black" />
    </a>
  );
};

export default DownloadButtonForGallery;
