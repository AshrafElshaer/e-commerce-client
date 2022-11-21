import React, { ButtonHTMLAttributes, FC, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
type TBottunProps = {
  children: string;
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
    "text-black bg-white border border-black hover:bg-black hover:text-white",
  secondary: "text-black hover:text-orange",
};

const Button: FC<TBottunProps> = ({
  children,
  buttonType = "primary",
  ...otherProps
}) => {
  return (
    <button
      className={`w-full transition-all duration-300  text-center px-4 py-2 mx-auto uppercase font-bold flex justify-center items-center gap-3 ${buttonStyles[buttonType]}`}
      {...otherProps}>
      {children}
      {buttonType === "secondary" && <AiOutlineRight className='text-orange' />}
    </button>
  );
};

export default Button;
