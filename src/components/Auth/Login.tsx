import { setCredentials, useLoginUserMutation } from "../../features/authSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";
import { loginValidation } from "../../lib/formValidations";
import Button from "../Button";
import FormikControl from "../Form/FormikControl";
import { useState } from "react";
export type TLoginFormState = {
  email: string;
  password: string;
};
const initialValues: TLoginFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (
    values: TLoginFormState,
    { resetForm }: FormikHelpers<TLoginFormState>
  ): Promise<any> => {
    setErrMsg("");

    try {
      const userData = await loginUser({
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
        validationSchema={loginValidation}>
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
            <p className='block text-right text-blue-600 cursor-pointer'>
              Forgot Password ?
            </p>
            <Button
              type='submit'
              className='w-full rounded-full mt-6 mb-2'
              disabled={isLoading}>
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
