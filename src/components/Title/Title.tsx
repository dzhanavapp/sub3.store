import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import classes from "./Title.module.css";

type Props = PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement> & {
    big?: boolean;
    gradient?: boolean;
    noMargin?: boolean;
  };

const Title: FC<Props> = ({
  children,
  className,
  big = false,
  gradient = false,
  noMargin = false,
}) => {
  return (
    <h2
      className={clsx(classes.title, className, {
        [classes.big]: big,
        [classes.gradient]: gradient,
        [classes.noMargin]: noMargin,
      })}
    >
      {children}
    </h2>
  );
};

export default Title;
