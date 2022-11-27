import { ButtonHTMLAttributes, FC } from "react";
import { AiOutlineRight } from "react-icons/ai";
type TBottunProps = {
  children: string;
  className?: string;
  buttonType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type TButtonStyles = {
  readonly [key: string]: string;
  primary: string;
  outline: string;
  secondary: string;
};

const buttonStyles: TButtonStyles = {
  primary: "text-white bg-orange hover:bg-orange-light",
  outline:
    "text-black bg-transperent border border-black hover:bg-black hover:text-white",
  black: "text-white bg-black hover:bg-gray-dark",
  secondary: "text-black hover:text-orange",
};

const Button: FC<TBottunProps> = ({
  children,
  buttonType = "primary",
  className,
  ...otherProps
}) => {
  return (
    <button
      className={` transition-all duration-300  text-center text-sm px-6 py-[0.75rem] mx-auto uppercase font-bold flex justify-center items-center gap-3 ${buttonStyles[buttonType]} ${className}`}
      {...otherProps}>
      {children}
      {buttonType === "secondary" && <AiOutlineRight className='text-orange' />}
    </button>
  );
};

export default Button;
