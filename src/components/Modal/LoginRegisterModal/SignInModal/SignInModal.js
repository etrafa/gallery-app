import { useState } from "react";
import { signIn } from "../../../../firebase/firebaseConfig";
import { signInWithGoogle } from "../../../../firebase/firebaseConfig";

const SignInModal = ({ setOpenLoginModal }) => {
  const [userLoginInformation, setUserLoginInformation] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let userInformationInput = { [event.target.name]: event.target.value };
    setUserLoginInformation({
      ...userLoginInformation,
      ...userInformationInput,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(userLoginInformation.email, userLoginInformation.password);
    setOpenLoginModal(false);
  };

  return (
    <div className="my-10 w-full">
      <h1 className="text-center text-4xl text-main-gray-text font-bold">
        Welcome back to Retina
      </h1>

      <button
        onClick={() => signInWithGoogle(setOpenLoginModal)}
        className="text-black border mx-auto flex mt-6 w-11/12 h-12 items-center rounded-lg pl-4 font-bold hover:bg-slate-100"
      >
        <svg
          className="w-7 h-7 mr-7 ml-1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
            <path
              fill="#4285F4"
              d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
            />
            <path
              fill="#34A853"
              d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
            />
            <path
              fill="#FBBC05"
              d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
            />
            <path
              fill="#EA4335"
              d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
            />
          </g>
        </svg>
        Login with Google
      </button>
      <button
        onClick={() => {
          signIn("demoaccount@gmail.com", "etemlaura");
          setOpenLoginModal(false);
        }}
        className="text-black border mx-auto flex mt-6 w-11/12 h-12 items-center rounded-lg pl-4 font-bold hover:bg-slate-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 mr-7 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="blue"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Login with Demo
      </button>
      <h4 className="text-center mt-6 text-sm">OR</h4>
      <form className="flex flex-col">
        <input
          onChange={(e) => handleChange(e)}
          className="mx-auto border w-11/12 h-12 my-2 pl-4 tracking-wider"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="mx-auto border w-11/12 h-12 my-2 pl-4 tracking-wider"
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <button
          onClick={(e) => handleLogin(e)}
          className="bg-green-800 text-white w-8/12 h-12 mx-auto mt-4 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
      <h4 className="text-sm text-center mt-4 cursor-pointer">
        Forgot your password?
      </h4>
    </div>
  );
};

export default SignInModal;
