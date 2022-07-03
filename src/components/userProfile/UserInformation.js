import { useAuth } from "../../firebase/firebaseConfig";

const UserInformation = () => {
  const currentUser = useAuth();

  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-green-500 mx-auto rounded-full flex justify-center items-center">
        <span className="text-white font-bold text-5xl">
          {(currentUser && currentUser?.displayName.slice(0, 1)) || ""}
        </span>
      </div>
      <h2 className="mt-4 font-bold text-4xl">
        {(currentUser && currentUser?.displayName) || ""}
      </h2>
    </div>
  );
};

export default UserInformation;
