import { useAuth } from "../../firebase/firebaseConfig";
import { useGetDocument } from "../../hooks/useGetDocument";

const UserInformation = () => {
  const currentUser = useAuth();

  const userName = currentUser?.displayName;

  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-green-500 mx-auto rounded-full flex justify-center items-center">
        <span className="text-white font-bold text-5xl">e</span>
      </div>
      <h2 className="mt-4 font-bold text-4xl">e</h2>
    </div>
  );
};

export default UserInformation;
