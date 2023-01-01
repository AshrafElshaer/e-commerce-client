import { Formik, Form, FormikHelpers } from "formik";
import { accountValidation } from "../../lib/formValidations";
import { Button, FormikControl } from "../../Components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCurrentUser,
  setCredentials,
  useUpdateUserMutation,
} from "../../features/authSlice";

type TAccountState = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

const Account = () => {
  const user = useAppSelector(selectCurrentUser);
  const userId = user?._id;
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const dispatch = useAppDispatch();
  const initialValues = {
    name: user?.name ? user.name : "",
    email: user?.email ? user.email : "",
    phoneNumber: user?.phone ? user.phone : "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  const onSubmit = async (
    values: TAccountState,
    { resetForm }: FormikHelpers<TAccountState>
  ): Promise<any> => {
    try {
      const result = await updateUser({ userId, ...values });
      console.log(result)
      // dispatch(setCredentials({ userInfo: result.userInfo }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={accountValidation}>
      {(Formik) => (
        <Form>
          <div className='flex flex-col gap-4  md:justify-between md:flex-row  '>
            <FormikControl
              control='text'
              name='name'
              label='Name'
              placeholder='Alexei Ward'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='email'
              name='email'
              label='Email'
              placeholder='alexeiward@mail.com'
              errors={Formik.errors}
              touched={Formik.touched}
            />
          </div>
          <div className='flex flex-col gap-4  md:justify-between md:flex-row  '>
            <FormikControl
              control='number'
              name='phoneNumber'
              label='Phone Number'
              placeholder='2025550136'
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
          </div>

          <h3 className='text-2xl my-12'>Change Password</h3>

          <div className='flex flex-col gap-4  md:justify-between md:flex-row'>
            <FormikControl
              control='password'
              name='newPassword'
              label='New Password'
              placeholder='Must be at least 6 characters'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='password'
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Must match new password'
              errors={Formik.errors}
              touched={Formik.touched}
            />
          </div>
          <Button type='submit' className='ml-auto mr-0 my-4'>
            Save Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Account;
