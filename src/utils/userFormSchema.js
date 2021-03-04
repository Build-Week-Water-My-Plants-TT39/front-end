import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("-Username required").min(5),
  password: yup
    .string()
    .required("-Password required")
    .min(8, "-Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, "-Password can only contain"),
  phone_number: yup
    .string()
    .required("-Phone number required")
    .max(10, "-There can only be a max of 10 digits"),
});
