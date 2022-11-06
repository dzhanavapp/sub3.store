import clsx from "clsx";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import classes from "./Layout.module.css";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={clsx(classes.content, "container")}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
