import { useState } from "react";

//components
import UserInformation from "./UserInformation";
import UserLike from "./UserLike";
import UserLibrary from "./UserLibrary";

const UserProfile = () => {
  const [openLikePage, setOpenLikePage] = useState(false);
  const [openUserLibrary, setOpenUserLibrary] = useState(false);
  return (
    <div className="mt-32">
      <UserInformation />
      <section className="flex m-6 w-full mx-auto justify-center gap-12">
        <button
          onClick={() => {
            setOpenLikePage(true);
            setOpenUserLibrary(false);
          }}
          className={
            openLikePage
              ? "border w-40 h-12 ml-4 bg-black text-white font-bold tracking-wider text-lg"
              : "border w-40 h-12 ml-4 font-bold hover:bg-gray-50"
          }
        >
          Likes
        </button>
        <button
          onClick={() => {
            setOpenUserLibrary(true);
            setOpenLikePage(false);
          }}
          className={
            openUserLibrary
              ? "border w-40 h-12 ml-4 bg-black text-white font-bold tracking-wider text-lg"
              : "border w-40 h-12 ml-4 font-bold hover:bg-gray-50"
          }
        >
          Collections
        </button>
      </section>
      {openLikePage && <UserLike />}
      {openUserLibrary && <UserLibrary />}
    </div>
  );
};

export default UserProfile;
