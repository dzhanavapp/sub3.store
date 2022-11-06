import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button className={clsx(classes.button, className)}>{children}</button>
  );
};

export default Button;
