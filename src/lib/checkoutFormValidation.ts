import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const checkOutValidation = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Format").required("Required"),
  phoneNumber: yup
    .number()
    .required("Required")
    .test("len", "Must be 10 digits", (val) =>
      val ? val.toString().length === 10 : false
    ),
  address: yup.string().required("Required"),
  zipcode: yup.number().required("Requires"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  paymentMethod: yup.string(),
});

// val.toString().length === 10)
