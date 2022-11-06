import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Button.module.css";

type Props = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(classes.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
