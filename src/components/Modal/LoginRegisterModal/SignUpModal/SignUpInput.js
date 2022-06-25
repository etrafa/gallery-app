export const signUpInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character.",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    errorMessage: "It should be a valid email address.",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    pattern: "^.{6,}$",
    required: true,
    errorMessage: "Password must be at least 6 characters. ",
  },
];
