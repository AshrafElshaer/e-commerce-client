import { FormikHandlers } from "formik";
import Email from "./Email";
import Input, { TInputProps } from "./Input";
import Password from "./Password";
import Radio from "./Radio";

type TFormikControlProps = {
  control: string;
} & TInputProps;

const FormikControl = ({ control, ...rest }: TFormikControlProps) => {
  switch (control) {
    case "text":
      return <Input {...rest} />;
    case "email":
      return <Email {...rest} />;
    case "password":
      return <Password {...rest} />;
    case "number":
      return <Input control={control} {...rest} />;
    case "radio":
      return <Radio {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
