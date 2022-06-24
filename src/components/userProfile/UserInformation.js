import { useAuth } from "../../firebase/firebaseConfig";
import { useGetDocument } from "../../hooks/useGetDocument";

const UserInformation = () => {
  const currentUser = useAuth();

  //fetch the liked pictures from user's database
  const likedImageDB = useGetDocument("likes", currentUser);

  return (
    <div className="">
      <div className="w-24 h-24 bg-green-500 mx-auto rounded-full flex justify-center items-center">
        <span className="text-white font-bold text-5xl">E</span>
      </div>
      {likedImageDB &&
        likedImageDB.map((item) => (
          <div>
            <img src={item?.urls?.small} alt="" />
          </div>
        ))}
    </div>
  );
};

export default UserInformation;
