import WalletConnect from "../WalletConnect/WalletConnect";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div>logo</div>

      <WalletConnect />
    </header>
  );
}
