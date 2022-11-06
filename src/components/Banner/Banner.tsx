import clsx from "clsx";
import classes from "./Banner.module.css";
import { ReactComponent as Sub3 } from "../../assets/svg/sub3.svg";
import { FC, HTMLAttributes } from "react";

const BigSphere = () => {
  return <div className={clsx(classes.sphereBig, classes.sphere)} />;
};

const SmallSphere = () => {
  return <div className={clsx(classes.sphereSmall, classes.sphere)} />;
};

type Props = HTMLAttributes<HTMLDivElement>;

const Banner: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(classes.banner, className)}>
      <span className={classes.text}>
        Convenient and <br />
        safe source <br />
        crypto services
      </span>
      <SmallSphere />
      <Sub3 className={classes.title} />
      <BigSphere />
    </div>
  );
};

export default Banner;
