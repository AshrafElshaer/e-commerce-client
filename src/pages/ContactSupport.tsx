import { Formik, Form, FormikHelpers } from "formik";
import { useAppSelector } from "../app/hooks";
import { Button, FormikControl } from "../Components";
import { selectCurrentUser } from "../features/authSlice";
import { contactUsValidation } from "../lib/formValidations";
import chactImg from "../assets/Chat_Monochromatic.svg";

import { useSendMessageMutation } from "../features/ordersSlice";
import { useState } from "react";
type TContactSate = {
  name: string;
  email: string;
  title: string;
  message: string;
};
const ContactSupport = () => {
  const user = useAppSelector(selectCurrentUser);
  const [displayMsg, setDisplayMsg] = useState("");
  const [sendMessage, { isLoading, isSuccess }] = useSendMessageMutation();
  const initialValues = {
    name: user?.name || "",
    email: user?.email || "",
    title: "",
    message: "",
  };

  const onSubmit = async (
    values: TContactSate,
    { resetForm }: FormikHelpers<TContactSate>
  ): Promise<any> => {
    try {
      const result = await sendMessage({
        userId: user?._id,
        ...values,
      }).unwrap();
      setDisplayMsg(result.message);
    } catch (err: any) {
      setDisplayMsg(err.data.message);
    }
  };
  return (
    <section className='container py-8'>
      <h1 className='text-2xl my-4 text-center'>Shoot us a message !</h1>
      <p className='text-2xl font-bold uppercase'>{displayMsg}</p>
      <div className='my-8 py-4 flex flex-col gap-6 md:flex-row-reverse md:gap-16 md:justify-between'>
        <img
          src={chactImg}
          alt=' contact us'
          className='mx-auto w-96 md:flex-1'
        />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={contactUsValidation}>
          {(Formik) => (
            <Form className='md:flex-1'>
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
                label='Email Address'
                placeholder='alexeiward@example.com'
                errors={Formik.errors}
                touched={Formik.touched}
              />
              <FormikControl
                control='text'
                name='title'
                label='Regarding'
                placeholder='Title Or Order Number'
                errors={Formik.errors}
                touched={Formik.touched}
              />
              <FormikControl
                control='textarea'
                name='message'
                label='Message'
                placeholder='Your Message Here'
                errors={Formik.errors}
                touched={Formik.touched}
              />
              <Button
                type='submit'
                disabled={isLoading || isSuccess}
                className='w-full my-8'>
                Send Message
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSupport;
