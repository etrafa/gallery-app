import { useState } from "react";

//firebase signup function
import { signUp } from "../../firebase/firebaseConfig";

const SignUpModal = () => {
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

  //ONCLICK SEND USER INFORMATION TO THE DB AND REGISTER
  const registerUser = (e) => {
    signUp(
      newUserInformation.email,
      newUserInformation.password,
      newUserInformation.username
    );
  };

  return (
    <div className="my-10 w-full lg:overflow-auto h-96">
      <h1 className="text-center text-4xl text-main-gray-text font-bold mx-12">
        Sign up now and discover millions of pictures!
      </h1>
      <button className="text-black border mx-auto flex mt-6 w-11/12 h-12 items-center rounded-lg pl-4 font-bold hover:bg-slate-100">
        <svg
          className="w-8 h-8 mr-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="blue"
        >
          <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
        </svg>
        Continue with Facebook
      </button>
      <button className="text-black border mx-auto flex mt-6 w-11/12 h-12 items-center rounded-lg pl-4 font-bold hover:bg-slate-100">
        <svg
          className="w-7 h-7 mr-8"
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
        Continue with Google
      </button>
      <h4 className="text-center mt-6 text-sm">OR</h4>
      <form className="flex flex-col">
        <input
          onChange={(e) => handleChange(e)}
          className="mx-auto border w-11/12 h-12 my-2 pl-4 tracking-wider"
          type="text"
          name="username"
          required
          placeholder="Username"
        />
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
        <input
          onChange={(e) => handleChange(e)}
          className="mx-auto border w-11/12 h-12 my-2 pl-4 tracking-wider"
          type="password"
          name="confirm_password"
          required
          placeholder="Confirm Password"
        />
        <button
          onClick={registerUser}
          className="bg-green-800 text-white w-8/12 h-12 mx-auto mt-4 rounded hover:bg-green-600"
        >
          Sign up
        </button>
      </form>
      <h4 className="text-sm text-center mt-4 cursor-pointer">
        Have an account? Sign in here.
      </h4>
    </div>
  );
};

export default SignUpModal;
