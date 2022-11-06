import Subscription from "../../components/Subscription/Subscription";
import Title from "../../components/Title";
import useAuthGuard from "../../hooks/useGuardAuth";
import { services } from "../../mocks/services";
import classes from "./Account.module.css";

export default function AccountPage() {
  useAuthGuard();

  return (
    <>
      <Title big gradient>
        Your subscriptions
      </Title>

      <div className={classes.grid}>
        <Subscription service={services[0]} />

        <Subscription service={services[0]} />

        <Subscription service={services[0]} />

        <Subscription service={services[0]} />
      </div>
    </>
  );
}
