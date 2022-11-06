import { FC } from "react";
import { Link } from "react-router-dom";
import { service } from "../../mocks/services";
import { BASE_TOKEN } from "../../mocks/tokens";
import Button from "../Button";
import classes from "./Subscription.module.css";

type Props = {
  service: service;
  noManage?: boolean;
};

const Subscription: FC<Props> = ({ service, noManage = false }) => {
  const { name, description, icon, id } = service;

  const handleUnsubscribe = () => {
    console.log("unsubscrive");
  };

  const token = BASE_TOKEN;

  return (
    <div className={classes.card}>
      <img src={icon} alt={name} className={classes.icon} />
      <Link to={`/service/${id}`}>
        <div>
          <div className={classes.name}>{name}</div>
          <div className={classes.description} title={description}>
            {description}
          </div>
        </div>
      </Link>

      {!noManage && (
        <div className={classes.buttonWrapper}>
          <span className={classes.price} title="APE Coin">
            <img className={classes.token} src={token.icon} alt={token.name} />

            <span>
              2 {token.symbol} / per {service.period}
            </span>
          </span>
          <Button onClick={handleUnsubscribe}>unsubscribe</Button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
