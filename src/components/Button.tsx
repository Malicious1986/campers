import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  appearance?: "primary" | "secondary";
}

const baseClasses = " cursor-pointer rounded-full px-6 h-14";
const appearanceClasses = {
  primary: "bg-button hover:bg-button-hover min-w-[166px] text-white",
  secondary: "border border-gray-light text-main min-w-[145px] hover:border-button-hover",
};

export const Button: React.FC<Props> = ({
  className,
  children,
  appearance = "primary",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={[baseClasses, appearanceClasses[appearance], className].join(
        " ",
      )}
    >
      {children}
    </button>
  );
};
