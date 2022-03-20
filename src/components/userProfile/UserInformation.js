import { useContext } from "react";
import { Link } from "react-router-dom";
import { GalleryContext } from "../Context/GalleryContext";
import Navbar from "../navbar/Navbar";

const UserInformation = () => {
  const { loginName, setLoginName } = useContext(GalleryContext);

  return (
    <div>
      <Navbar />
      <div className="text-center mt-24">
        <h2 className="">LAURA SENEL</h2>
      </div>
    </div>
  );
};

export default UserInformation;
