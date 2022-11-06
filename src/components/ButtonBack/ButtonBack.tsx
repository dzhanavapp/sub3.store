import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../assets/svg/back-arrow.svg";

import classes from "./ButtonBack.module.css";

type Props = HTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    to?: string;
  };

const ButtonBack: FC<Props> = ({ children, to = "/", className, ...rest }) => {
  return (
    <Link to={to}>
      <button className={clsx(classes.button, className)} {...rest}>
        <BackArrow />
        <span>{children || "back home"}</span>
      </button>
    </Link>
  );
};

export default ButtonBack;
