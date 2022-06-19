import { useAuth } from "../../firebase/firebaseConfig";

const UserInformation = () => {
  const currentUser = useAuth();

  console.log(currentUser);

  return (
    <div className="">
      <div className="w-24 h-24 bg-green-500 mx-auto rounded-full flex justify-center items-center">
        <span className="text-white font-bold text-5xl">E</span>
      </div>
    </div>
  );
};

export default UserInformation;
