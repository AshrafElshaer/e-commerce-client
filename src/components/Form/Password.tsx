import { useState, useEffect, FormEvent } from "react";
import {
  Field,
  ErrorMessage,
  FormikErrors,
  FormikTouched,
  FieldProps,
} from "formik";
import { TCheckoutOptions } from "../../pages/Checkout";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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

const Password = (props: TInputProps) => {
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
  const [isVisible, setIsVisible] = useState(false);

  const toggleShowPassword = () => setIsVisible((perv) => !perv);

  useEffect(() => {
    errors && touched && errors[name] && touched[name]
      ? setIsError(true)
      : setIsError(false);
    // console.log(rest)
  }, [errors, touched]);

  return (
    <div className={`${styles} min-w-[45%] flex-grow-0 mb-4`}>
      <label htmlFor={name} className='flex justify-start my-2'>
        <span className={` w- ${isError ? "text-red-600" : ""}`}>{label}</span>
        <ErrorMessage name={name}>
          {(errMsg) => (
            <span className='ml-auto text-red-600'>
              {errMsg === "password must be at least 6 characters"
                ? "Must be at least 6 characters"
                : errMsg}
            </span>
          )}
        </ErrorMessage>
      </label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div className='relative '>
            <input
              type={isVisible ? "text" : "password"}
              id={name}
              placeholder={placeholder}
              className={`w-full py-2 px-4 border-2 ${
                isError ? "border-red-600 " : "border-gray-300"
              }  rounded-lg focus:outline-none focus:border-orange hover:border-orange cursor-pointer focus:cursor-text caret-orange`}
              {...field}
            />
            <span
              className='absolute right-2 cursor-pointer text-xl top-1/2 -translate-y-1/2'
              onClick={toggleShowPassword}>
              {isVisible ? (
                <AiFillEyeInvisible className='text-black/50' />
              ) : (
                <AiFillEye className='text-black/50' />
              )}
            </span>
          </div>
        )}
      </Field>
    </div>
  );
};

export default Password;
