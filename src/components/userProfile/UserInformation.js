import { useContext } from "react";

import { GalleryContext } from "../Context/GalleryContext";
import Navbar from "../navbar/Navbar";

const UserInformation = () => {
  const { loginName } = useContext(GalleryContext);

  return (
    <div>
      <Navbar />
      <div className="text-center mt-24">
        <h2 className="font-black border-b-4 inline-block">
          {loginName.toUpperCase()}
        </h2>
      </div>
    </div>
  );
};

export default UserInformation;
