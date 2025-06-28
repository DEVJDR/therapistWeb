import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-300",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

type ButtonProps = {
  variant: "primary" | "secondary";
  size?: "sm";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ variant, size, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(classes({ variant, size }), className)}
      {...rest}
    />
  );
};

export default Button;
