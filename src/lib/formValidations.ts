import * as yup from "yup";

export const checkOutValidation = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  phoneNumber: yup
    .number()
    .required("Required")
    .test("len", "Must be 10 digits", (val) =>
      val ? val.toString().length === 10 : false
    ),
  street: yup.string().required("Required"),
  zipcode: yup.number().required("Requires"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  paymentMethod: yup.string(),
});

export const loginValidation = yup.object({
  email: yup.string().email("Invalid Email Format").required("Required"),
  password: yup.string().required("Required").min(6),
});
export const signupValidation = yup.object({
  email: yup.string().email("Invalid Email Format").required("Required"),
  password: yup.string().required("Required").min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const accountValidation = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  phoneNumber: yup
    .number()
    .required("Required")
    .test("len", "Must be 10 digits", (val) =>
      val ? val.toString().length === 10 : false
    ),
  password: yup.string().required("Required").min(6),
  newPassword: yup.string().min(6),
  confirmPassword: yup
    .string()
    .when("newPassword", (newPassword, field) =>
      newPassword
        ? field
            .required("Required")
            .oneOf([yup.ref("newPassword"), null], "Passwords must match")
        : field
    ),
});

export const addressValidation = yup.object({
  street: yup.string().required("Required"),
  zipcode: yup.number().required("Requires"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
});
