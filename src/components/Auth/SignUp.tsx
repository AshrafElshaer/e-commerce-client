import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
  setCredentials,
  useRegisterUserMutation,
} from "../../features/authSlice";
import { signupValidation } from "../../lib/formValidations";
import Button from "../Button";
import FormikControl from "../Form/FormikControl";
import { TLoginFormState } from "./Login";

type TSignUpState = TLoginFormState & { confirmPassword: string };

const initialValues: TSignUpState = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [errMsg, setErrMsg] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit = async (
    values: TSignUpState,
    { resetForm }: FormikHelpers<TSignUpState>
  ): Promise<any> => {
    setErrMsg("");

    try {
      const userData = await registerUser({
        email: values.email,
        password: values.password,
      }).unwrap();
      
      dispatch(setCredentials({ ...userData }));
      resetForm();
      navigate("/");
    } catch (err: any) {
      setErrMsg(err.data.message);
    }
  };
  return (
    <>
      <p className='text-red-500 text-base text-center'>{errMsg}</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signupValidation}>
        {(Formik) => (
          <Form>
            <FormikControl
              control='email'
              name='email'
              label='Email'
              placeholder='example@example.com'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='password'
              name='password'
              label='Password'
              placeholder='Must be at least 6 characters'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Must match password'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <Button type='submit' className='w-full rounded-full mt-4 mb-2'>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
