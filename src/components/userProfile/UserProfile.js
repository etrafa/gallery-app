import { useState } from "react";

//components
import UserInformation from "./UserInformation";
import UserLike from "./UserLike";
import UserLibrary from "./UserLibrary";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="mt-32">
      <UserInformation />
      <section className="flex m-6 w-full mx-auto justify-center gap-12">
        <Link to="/liked-images">
          <button
            //  "border w-40 h-12 ml-4 bg-black text-white font-bold tracking-wider text-lg"
            className="border w-40 h-12 ml-4 font-bold hover:bg-gray-50"
          >
            Likes
          </button>
        </Link>
        <Link to="/my-collections">
          <button className="border w-40 h-12 ml-4 font-bold hover:bg-gray-50">
            Collections
          </button>
        </Link>
      </section>
    </div>
  );
};

export default UserProfile;
