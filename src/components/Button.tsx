import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { IconType } from "react-icons";
import { AiOutlineRight } from "react-icons/ai";
type TBottunProps = {
  children: string | ReactNode;
  className?: string;
  buttonType?: string;
  Icon?: IconType;
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
  blue: "text-white bg-blue-500 hover:bg-blue-300",
  secondary: "text-black hover:text-orange",
};

const Button = ({
  children,
  buttonType = "primary",
  className,
  Icon,
  ...otherProps
}: TBottunProps) => {
  return (
    <button
      className={` transition-all duration-300  text-sm px-6 py-[0.75rem] mx-auto uppercase font-bold flex justify-center gap-3 
      ${buttonStyles[buttonType]} ${className ? className : ""} 
      ${Icon ? "" : "items-center"}`}
      {...otherProps}>
      {Icon ? <Icon className='text-lg' /> : null}
      {children}
      {buttonType === "secondary" ? (
        <AiOutlineRight className='text-orange' />
      ) : null}
    </button>
  );
};

export default Button;
