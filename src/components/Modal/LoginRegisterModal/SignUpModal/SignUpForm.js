import { useState } from "react";
import "./SignUp.css";

const SignUpForm = (props) => {
  const { onChange, errorMessage, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col sign-up-container">
      <input
        className="mx-auto border w-11/12 h-12 my-2 pl-4 tracking-wider"
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span className="sign-up-span">{errorMessage}</span>
    </div>
  );
};

export default SignUpForm;
