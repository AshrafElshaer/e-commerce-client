import { FormikHandlers } from "formik";
import Input, { TInputProps } from "./Input";
import Radio from "./Radio";

type TFormikControlProps = {
  control: string;
} & TInputProps;

const FormikControl = ({ control, ...rest }: TFormikControlProps) => {
  switch (control) {
    case "text":
      return <Input {...rest} />;
    case "number":
      return <Input control={control} {...rest} />;
    case "radio":
      return <Radio {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
