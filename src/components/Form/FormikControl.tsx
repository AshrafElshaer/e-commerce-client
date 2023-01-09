import { FormikHandlers } from "formik";
import Email from "./Email";
import Text, { TInputProps } from "./Text";
import Password from "./Password";
import Radio from "./Radio";
import Textarea from "./Textarea";

type TFormikControlProps = {
  control: string;
} & TInputProps;

const FormikControl = ({ control, ...rest }: TFormikControlProps) => {
  switch (control) {
    case "text":
      return <Text {...rest} />;
    case "email":
      return <Email {...rest} />;
    case "password":
      return <Password {...rest} />;
    case "number":
      return <Text control={control} {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
