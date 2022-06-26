import { useState } from "react";

//firebase signup function
import { addDataToDB, auth, signUp } from "../../../../firebase/firebaseConfig";
import SignUpForm from "./SignUpForm";
import { signUpInputs } from "./SignUpInput";
import SignUpAuths from "./SignUpAuths";

const SignUpModal = ({
  setIsSignUpModalOpen,
  setIsSignInModalOpen,
  setOpenLoginModal,
}) => {
  //STORE USER INFORMATION
  const [newUserInformation, setNewUserInformation] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  //ONCHANGE, SAVE USER INFORMATION
  const handleChange = (event) => {
    let newUser = { [event.target.name]: event.target.value };
    setNewUserInformation({ ...newUserInformation, ...newUser });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    await signUp(
      newUserInformation.email,
      newUserInformation.password,
      newUserInformation.username,
      setOpenLoginModal(false)
    );
  };

  return (
    <div className="my-10 w-full lg:overflow-auto h-96">
      <h1 className="text-center text-4xl text-main-gray-text font-bold mx-12">
        Sign up now and discover millions of pictures!
      </h1>
      <SignUpAuths />
      <h4 className="text-center mt-6 text-sm">OR</h4>
      <form className="flex flex-col">
        {signUpInputs.map((input) => (
          <SignUpForm
            key={input.id}
            {...input}
            value={newUserInformation[input.name]}
            onChange={handleChange}
          />
        ))}
        <button
          onClick={registerUser}
          className="bg-green-800 text-white w-8/12 h-12 mx-auto mt-4 rounded hover:bg-green-600"
        >
          Sign up
        </button>
      </form>
      <h4
        onClick={() => {
          setIsSignUpModalOpen(false);
          setIsSignInModalOpen(true);
        }}
        className="text-sm text-center mt-6 my-4 cursor-pointer"
      >
        Have an account?
        <span className="pl-1 underline text-blue-600 hover:text-blue-400">
          Sign in here.
        </span>
      </h4>
    </div>
  );
};

export default SignUpModal;
