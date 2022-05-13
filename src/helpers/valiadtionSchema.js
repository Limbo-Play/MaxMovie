import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email("Not valid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Min length is 6 symbols")
      .max(12, "Max length is 12 symbols")
      .matches(/([a-zA-Z0-9]{6,})/, "Not valid password")
      .required("Password is required"),
  })
  .required();

export const signUpSchema = yup
  .object({
    name: yup.string().min(3, "Min 3 symbol"),
    email: yup.string().email("Not valid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Min length is 6 symbols")
      .max(12, "Max length is 12 symbols")
      .matches(/([a-zA-Z0-9]{6,})/, "Not valid password")
      .required("Password is required"),
  })
  .required();

export const recoverPasswordSchema = yup
  .object({
    code: yup
      .string()
      .min(6, "Code must have 6 symbol")
      .max(6, "Code must have 6 symbol")
      .matches(/([0-9]{6,})/, "Not valid code")
      .required("Code is required"),
    newPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Both passwords must match."),
    password: yup
      .string()
      .min(6, "Min length is 6 symbols")
      .max(12, "Max length is 12 symbols")
      .matches(/([a-zA-Z0-9]{6,})/, "Not valid password")
      .required("Password is required"),
  })
  .required();

export const inputpMailRecoverSchema = yup
  .object({
    email: yup.string().email("Not valid email").required("Email is required"),
  })
  .required();
