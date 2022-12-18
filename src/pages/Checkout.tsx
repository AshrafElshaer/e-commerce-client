import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers, useFormikContext } from "formik";
import { Button, FormikControl } from "../components";
import { checkOutValidation } from "../lib/formValidations";
import { ConnectedFocusError } from "focus-formik-error";

// resetForm: function resetForm(nextState)​
// setErrors: function setErrors(errors)​
// setFieldError: function setFieldError(field, value)​
// setFieldTouched: function useEventCallback()​
// setFieldValue: function useEventCallback()​
// setFormikState: function setFormikState(stateOrCb)​
// setStatus: function setStatus(status)​
// setSubmitting: function setSubmitting(isSubmitting)​
// setTouched: function useEventCallback()​
// setValues: function useEventCallback()​
// submitForm: function useEventCallback()​
// validateField: function useEventCallback()​
// validateForm: function useEventCallback()

export type TCheckoutFormState = {
  name: string;
  email: string;
  phoneNumber: number | string;
  address: string;
  zipcode: number | string;
  city: string;
  country: string;
  paymentMethod: string;
};
export type TCheckoutOptions = {
  key: string;
  value: string;
}[];

const initialValues: TCheckoutFormState = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipcode: "",
  city: "",
  country: "",
  paymentMethod: "creditCard",
};

const checkoutOptions = [
  { key: "Credit Card", value: "creditCard" },
  { key: "Cash On Delivery", value: "cash" },
];

const Checkout = () => {
  const navigate = useNavigate();

  const onSubmit = (
    values: TCheckoutFormState,
    { resetForm }: FormikHelpers<TCheckoutFormState>
  ): void | Promise<any> => {};
  return (
    <div className='bg-gray'>
      <button
        onClick={() => navigate(-1)}
        className='block py-8 hover:text-orange container text-left'>
        {" "}
        Go Back
      </button>
      <div className='container flex flex-col md:flex-row  gap-8 pb-24'>
        {/* CHECKOUT FORM*/}
        <section className='flex-[2]'>
          <div className='bg-white p-10 rounded-lg shadow-lg'>
            <h1 className='text-3xl uppercase'> Checkout</h1>

            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={checkOutValidation}>
              {(Formik) => {
                return (
                  <Form id='checkout'>
                    <h2 className='text-orange my-8 uppercase tracking-wider'>
                      Billing Details
                    </h2>
                    <div className='md:flex flex-wrap flex-grow-0 gap-4'>
                      <FormikControl
                        control='text'
                        name='name'
                        label='Name'
                        placeholder='Alexei Ward'
                        errors={Formik.errors}
                        touched={Formik.touched}
                      />
                      <FormikControl
                        control='text'
                        name='email'
                        label='Email Address'
                        placeholder='alexeiward@mail.com'
                        errors={Formik.errors}
                        touched={Formik.touched}
                      />
                      <FormikControl
                        control='number'
                        name='phoneNumber'
                        label='Phone Number'
                        placeholder='2025550136'
                        errors={Formik.errors}
                        touched={Formik.touched}
                      />
                    </div>
                    <h2 className='text-orange my-8 uppercase tracking-wider'>
                      shipping info
                    </h2>
                    <div className='md:flex flex-wrap flex-grow-0 gap-4'>
                      <FormikControl
                        control='text'
                        name='address'
                        label='Address'
                        placeholder='1137 Williams Avenue'
                        errors={Formik.errors}
                        touched={Formik.touched}
                        styles='w-full'
                      />
                      <FormikControl
                        control='text'
                        name='city'
                        label='City'
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
                      <FormikControl
                        control='text'
                        name='country'
                        label='Country'
                        placeholder='United States'
                        errors={Formik.errors}
                        touched={Formik.touched}
                      />
                    </div>
                    <h2 className='text-orange my-8 uppercase tracking-wider'>
                      payment details{" "}
                    </h2>
                    <div className='md:flex w-full'>
                      <p className='flex-1'>Payment Method</p>
                      <div className='flex-1'>
                        <FormikControl
                          control='radio'
                          name='paymentMethod'
                          label='Payment Method'
                          options={checkoutOptions}
                        />
                      </div>
                    </div>
                    <ConnectedFocusError />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </section>

        {/* CART SUMMARY  */}
        <section className='bg-white rounded-lg flex-1 h-fit p-6 shadow-lg'>
          <h3 className='uppercase'>summary</h3>

          <div className='flex justify-start items-center gap-6 my-6'>
            <img
              src='/src/assets/cart/image-xx59-headphones.jpg'
              alt=''
              className='w-16 rounded-md'
            />
            <div>
              <h4 className='text-xl font-bold'>name</h4>
              <p className='text-black/40'>$ price</p>
            </div>
            <span className='ml-auto text-black/40'>{/* cart count */}X 3</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-black/40 uppercase'>total</span>
            <span className='text-bold text-xl'>$ 5,396</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-black/40 uppercase'>shipping</span>
            <span className='text-bold text-xl'>$ 50</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-black/40 uppercase'>vat(8.25%)</span>
            <span className='text-bold text-xl'>$ 1,079</span>
          </div>
          <div className='flex justify-between mb-8'>
            <span className='text-black/40 uppercase'>grand total</span>
            <span className='text-bold text-xl text-orange'>$ 5,446</span>
          </div>
          <Button type='submit' form='checkout' className='w-full'>
            CONTINUE & PAY
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
