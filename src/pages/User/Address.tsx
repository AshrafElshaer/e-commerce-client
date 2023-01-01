import { Formik, Form, FormikHelpers } from "formik";
import { useAppSelector } from "../../app/hooks";
import { Button, FormikControl } from "../../Components";
import {
  selectCurrentUser,
} from "../../features/authSlice";
import { addressValidation } from "../../lib/formValidations";

type TAddressState = {
  street: string;
  zipcode: string | number;
  city: string;
  country: string;
};

const Address = () => {
  const user = useAppSelector(selectCurrentUser);
  // const [updateUser, { isLoading }] = useUpdateUserMutation();
  const initialValues: TAddressState = {
    street: "",
    zipcode: "",
    city: "",
    country: "",
  };
  const onSubmit = async (
    values: TAddressState,
    { resetForm }: FormikHelpers<TAddressState>
  ): Promise<any> => {
    try {
      // const result = await updateUser(values);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={addressValidation}>
      {(Formik) => (
        <Form>
          <FormikControl
            control='text'
            label='Address'
            name='street'
            errors={Formik.errors}
            touched={Formik.touched}
            placeholder='1137 Williams Avenue'
          />
          <div className='flex flex-col gap-4  md:justify-between md:flex-row'>
            <FormikControl
              control='text'
              label='City'
              name='city'
              placeholder='New York'
              errors={Formik.errors}
              touched={Formik.touched}
            />
            <FormikControl
              control='number'
              name='zipcode'
              label='Zip Code'
              placeholder='10001'
              errors={Formik.errors}
              touched={Formik.touched}
            />
          </div>
          <div className='flex flex-col gap-4  md:justify-between md:flex-row'>
            <FormikControl
              control='text'
              name='country'
              label='Country'
              placeholder='United States'
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

export default Address;
