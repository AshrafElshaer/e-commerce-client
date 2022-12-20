import { useState, useEffect, FormEvent } from "react";
import { Field, ErrorMessage, FormikErrors, FormikTouched } from "formik";
import { TCheckoutOptions } from "../../pages/Checkout";

export type TFormikErrorsAndTouched<T> = {
  [key: string]: T;
  name: T;
  email: T;
  phoneNumber: T;
  address: T;
  zipcide: T;
  city: T;
  paymentMethod: T;
};
export type TInputProps = {
  control?: string;
  label?: string;
  name: string;
  styles?: string;
  placeholder?: string;
  errors?: FormikErrors<TFormikErrorsAndTouched<string>>;
  touched?: FormikTouched<TFormikErrorsAndTouched<boolean>>;
  options?: TCheckoutOptions;
};

const Email = (props: TInputProps) => {
  const {
    label,
    name,
    styles = "flex-1",
    errors,
    touched,
    control,
    placeholder,
    // ...rest
  } = props;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    errors && touched && errors[name] && touched[name] ? setIsError(true) : setIsError(false);
  }, [errors, touched]);

  return (
    <div className={`${styles} min-w-[45%] flex-grow-0 mb-4`}>
      <label htmlFor={name} className='flex justify-start my-2'>
        <span className={`${isError ? "text-red-600" : ""}`}>{label}</span>
        <ErrorMessage name={name}>
          {(errMsg) => <span className='ml-auto text-red-600'> {errMsg} </span>}
        </ErrorMessage>
      </label>
      <Field
        type='email'
        id={name}
        name={name}
        placeholder={placeholder}
        // {...rest}
        autoComplete='off'
        className={`w-full py-2 px-4 border-2 ${
          isError ? "border-red-600 " : "border-gray-300"
        }  rounded-lg focus:outline-none focus:border-orange hover:border-orange cursor-pointer focus:cursor-text caret-orange`}
      />
    </div>
  );
};

export default Email;
