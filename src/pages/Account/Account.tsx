import { useEffect, useState } from "react";
import Subscription from "../../components/Subscription/Subscription";
import Title from "../../components/Title";
import { NULL_ADDRESS } from "../../helpers/constaints";
import useAuthGuard from "../../hooks/useGuardAuth";
import useSubContract from "../../hooks/useSubContract";
import { serviceMap, services } from "../../mocks/services";
import classes from "./Account.module.css";

export default function AccountPage() {
  useAuthGuard();

  const [subsciptions, setSubsciptions] = useState<any[]>([]);
  const [empty, setEmpty] = useState(false);

  const {
    isReady,
    contract,
    getSubscriptionByAddressStart,
    getSubscriptionByAddress,
  } = useSubContract();

  useEffect(() => {
    if (
      getSubscriptionByAddressStart &&
      getSubscriptionByAddress &&
      !subsciptions.length
    ) {
      getSubscriptionByAddressStart().then(async (serviceAddress: string) => {
        if (serviceAddress === NULL_ADDRESS) {
          return setEmpty(true);
        }

        let nextServiceAddress = serviceAddress;

        while (nextServiceAddress !== NULL_ADDRESS) {
          const subscription = await getSubscriptionByAddress(serviceAddress);
          setSubsciptions((s) => [...s, subscription]);
          nextServiceAddress = subscription.nextPayee as string;
        }
      });
    }
  }, [getSubscriptionByAddressStart, getSubscriptionByAddress]);

  if (!isReady) return <h3>Loading...</h3>;

  console.log(contract, "ccc");

  if (empty) {
    return (
      <>
        <Title big gradient>
          Your subscriptions
        </Title>

        <h3
          style={{
            textAlign: "center",
          }}
        >
          You don't have subscriptions right now
        </h3>
      </>
    );
  }

  return (
    <>
      <Title big gradient>
        Your subscriptions
      </Title>

      <div className={classes.grid}>
        {subsciptions.map((p) => {
          const service = serviceMap[p.payee];
          return <Subscription key={service.id} service={service} />;
        })}
      </div>
    </>
  );
}
