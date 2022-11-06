import { FC, PropsWithChildren } from "react";
import Header from "../Header/Header";
import classes from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
