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
  primary: "text-white bg-orange hover:bg-light-orange",
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
      className={`transition-all duration-300 w-full text-center bg-white py-4 uppercase font-bold flex justify-center items-center gap-4 ${buttonStyles[buttonType]}`}
      {...otherProps}>
      <p>{children}</p>
      <p className='text-orange'>
        {buttonType === "secondary" && <AiOutlineRight />}
      </p>
    </button>
  );
};

export default Button;
