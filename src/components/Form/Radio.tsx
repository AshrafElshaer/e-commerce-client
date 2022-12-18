import { Fragment } from "react";
import { Field, FieldInputProps, FieldProps } from "formik";
import type { TInputProps } from "./Input";


const Radio = (props: TInputProps) => {
  const { label, name, options, ...rest } = props;

  return (
    <div>
      <Field name={name} {...rest}>
        {({ field }: FieldProps) => {
          // console.log(field);
          return options?.map((option) => {
            return (
              <div
                key={option.key}
                className={`w-full p-4 flex items-center gap-6 border-2  rounded-lg my-4 ${field.value === option.value ? 'border-orange' :"border-gray-300"}`}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value} className='cursor-pointer font-bold'>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default Radio;
