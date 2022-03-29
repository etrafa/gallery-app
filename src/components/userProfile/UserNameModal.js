import "./UserNameModal.css";
import { useContext } from "react";
import { GalleryContext } from "../Context/GalleryContext";

const UserNameModal = () => {
  const { setOpenLoginModal, setLoginName } = useContext(GalleryContext);

  const clickHandler = (e) => {
    e.preventDefault();
    setOpenLoginModal(false);
  };

  return (
    <div className=" bg-slate-100 fixed inset-0 z-50 h-full">
      <form className="flex flex-col items-center mt-24">
        <input
          onChange={(e) => setLoginName(e.target.value)}
          className="rounded w-4/6 h-12 mt-12 placeholder:text-center lg:w-5/12"
          type="text"
          placeholder="Enter your name"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 w-2/4 text-white font-bold py-2 px-4 rounded mt-12 lg:w-2/12"
          onClick={clickHandler}
        >
          Sign In
        </button>
        <button
          className=" bg-slate-300 text-white w-2/4 font-bold py-2 px-4 rounded mt-8 lg:w-2/12"
          onClick={(e) => {
            e.preventDefault();
            setLoginName("Guest");
            setOpenLoginModal(false);
          }}
        >
          Demo
        </button>
      </form>
    </div>
  );
};

export default UserNameModal;
