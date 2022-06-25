//components
import SignInModal from "./SignInModal/SignInModal";
import SignUpModal from "./SignUpModal/SignUpModal";

import { useState } from "react";

const LoginModal = ({ setOpenLoginModal }) => {
  //OPEN OTHER SIGN IN OR SIGN UP MODAL. TWO OF THEM CONNECTED TO THE SAME MAIN MODAL

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(true);

  return (
    <div className="w-full ml-auto fixed min-h-screen top-0 bg-black bg-opacity-75 z-50">
      <div className="absolute bg-white rounded-lg shadow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-5/12 min-h-screen lg:min-h-fit">
        <button
          onClick={() => setOpenLoginModal(false)}
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="px-6 flex justify-between mx-12 my-4">
          <button
            className={
              isSignInModalOpen
                ? "w-6/12 mx-2 h-12 border bg-black text-white"
                : "w-6/12 mx-2 h-12 border text-black hover:bg-slate-50"
            }
            onClick={() => {
              setIsSignInModalOpen(true);
              setIsSignUpModalOpen(false);
            }}
          >
            Login
          </button>
          <button
            className={
              isSignUpModalOpen
                ? "w-6/12 mx-2 h-12 border bg-black text-white"
                : "w-6/12 mx-2 h-12 border text-black hover:bg-slate-50"
            }
            onClick={() => {
              setIsSignInModalOpen(false);
              setIsSignUpModalOpen(true);
            }}
          >
            Sign up
          </button>
        </div>

        {/* SIGN IN OR SIGN UP MODAL  */}
        {isSignUpModalOpen && (
          <SignUpModal
            setIsSignUpModalOpen={setIsSignUpModalOpen}
            setIsSignInModalOpen={setIsSignInModalOpen}
            setOpenLoginModal={setOpenLoginModal}
          />
        )}
        {isSignInModalOpen && (
          <SignInModal setOpenLoginModal={setOpenLoginModal} />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
