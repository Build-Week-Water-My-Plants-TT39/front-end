import * as yup from "yup";

export default yup.object().shape({
  username: yup.string().required("username required").min(5),
  password: yup
    .string()
    .required("password required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain"),
  phone_number: yup
    .string()
    .required("phone number required")
    .max(10, "There can only be a max of 10 digits"),
});
