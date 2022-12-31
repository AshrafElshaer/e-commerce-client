import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { accountValidation } from "../../lib/formValidations";
import { Button, FormikControl } from "../../Components";
import { string } from "yup/lib/locale";

type TAccountState = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
};

const Account = () => {
  const initialValues = {
    name: "ashraf",
    email: "",
    phoneNumber: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  };

  const onSubmit = async (
    values: TAccountState,
    { resetForm }: FormikHelpers<TAccountState>
  ): Promise<any> => {
    // console.log(values);
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
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='email'
              name='email'
              label='Email'
              errors={Formik.errors}
              touched={Formik.touched}
            />
          </div>
          <div className='flex flex-col gap-4  md:justify-between md:flex-row  '>
            <FormikControl
              control='number'
              name='phoneNumber'
              label='Phone Number'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='password'
              name='password'
              label='Password'
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
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='password'
              name='confirmPassword'
              label='Confirm Password'
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
