import clsx from "clsx";
import { FC, HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { Link } from "react-router-dom";
import classes from "./Section.module.css";

type Props = PropsWithChildren &
  HTMLAttributes<HTMLScriptElement> & {
    heading: ReactElement;
    hasMore?: boolean;
  };

const Section: FC<Props> = ({ children, hasMore, heading, className }) => {
  return (
    <section className={clsx(classes.section, className)}>
      <header className={classes.header}>
        {heading}
        {hasMore && (
          <Link to={"#"} className={classes.link}>
            see all
          </Link>
        )}
      </header>

      <div className={classes.grid}>{children}</div>
    </section>
  );
};

export default Section;
