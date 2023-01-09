import { useState, useEffect } from "react";
import { Field, ErrorMessage, FormikErrors, FormikTouched } from "formik";
import { TCheckoutOptions } from "../../Pages/Checkout";
import { TFormikErrorsAndTouched } from "./Email";

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

const Textarea = (props: TInputProps) => {
  const {
    label,
    name,
    styles = "flex-1",
    errors,
    touched,

    placeholder,
    // ...rest
  } = props;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    errors && touched && errors[name] && touched[name]
      ? setIsError(true)
      : setIsError(false);
  }, [errors, touched]);

  return (
    <div className={`${styles} min-w-[45%] flex-grow-0`}>
      <label htmlFor={name} className='flex justify-start my-2'>
        <span className={` w- ${isError ? "text-red-600" : ""}`}>{label}</span>
        <ErrorMessage name={name}>
          {(errMsg) => <span className='ml-auto text-red-600'> {errMsg} </span>}
        </ErrorMessage>
      </label>
      <Field
        as='textarea'
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete='off'
        rows={5}
        className={`w-full  resize-none py-2 px-4 border-2 ${
          isError ? "border-red-600 " : "border-gray-300"
        }  rounded-lg focus:outline-none focus:border-orange hover:border-orange cursor-pointer focus:cursor-text caret-orange`}
      />
    </div>
  );
};

export default Textarea;
