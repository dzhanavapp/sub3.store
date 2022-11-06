import { shortAddress } from "../../helpers/formatter";
import { Web3Button, useAccount, useDisconnect } from "@web3modal/react";
import { Link } from "react-router-dom";
import { ReactComponent as Disconnect } from "../../assets/svg/disconnect.svg";
import classes from "./WalletConnect.module.css";

export default function WalletConnect() {
  const { account } = useAccount();
  const { isConnected } = account;

  const disconnect = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex alignt-center justify-center gap-3">
        <Link to="/account">
          <button className={classes.buttonAccount}>
            <code>{shortAddress(account.address)}</code>
          </button>
        </Link>

        <button onClick={disconnect} className={classes.buttonDisconnect}>
          <Disconnect />
        </button>
      </div>
    );
  }

  return (
    <span className={classes.buttonConnect}>
      <Web3Button />
    </span>
  );
}
