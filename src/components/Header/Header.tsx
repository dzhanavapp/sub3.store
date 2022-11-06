import WalletConnect from "../WalletConnect/WalletConnect";
import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={clsx(classes.headerInner, "container")}>
        <Link to="/">
          <Logo className={classes.logo} />
        </Link>

        <WalletConnect />
      </div>
    </header>
  );
}
