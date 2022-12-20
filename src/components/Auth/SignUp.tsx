import { Form, Formik, FormikHelpers } from "formik";
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

const onSubmit = (
  values: TSignUpState,
  { resetForm }: FormikHelpers<TSignUpState>
): void | Promise<any> => {
  console.log(values);
};
const SignUp = () => {
  return (
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
  );
};

export default SignUp;
