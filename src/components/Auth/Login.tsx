import { Form, Formik, FormikHelpers } from "formik";
import { loginValidation } from "../../lib/formValidations";
import Button from "../Button";
import FormikControl from "../Form/FormikControl";
export type TLoginFormState = {
  email: string;
  password: string;
};
const initialValues: TLoginFormState = {
  email: "",
  password: "",
};

const onSubmit = (
  values: TLoginFormState,
  { resetForm }: FormikHelpers<TLoginFormState>
): void | Promise<any> => {
  console.log(values);
};
const Login = () => {
  return (
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
          <Button type='submit' className='w-full rounded-full mt-6 mb-2'>
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
