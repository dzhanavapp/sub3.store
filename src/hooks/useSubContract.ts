import { useEffect, useState } from "react";
import Web3 from "web3";
import SUBMAN_ABI from "../assets/abi/subman-abi.json";
import detectEthereumProvider from "@metamask/detect-provider";

const ERC20_TOKEN = "0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253";
const SUBMAN_CONTRACT = "0x25b9c99E9CDc81E5d1c2509190c90b4F4475F1A8";

type SubscribeManager = {
  isReady: boolean;
  contract?: {
    methods: any;
  };
  addSubscription: (
    serviceAddress: string,
    amount: number,
    timestamp: number,
    tokenAddress: string
  ) => Promise<any>;

  getSubscriptionByAddress: (serviceAddress: string) => Promise<any>;
  getSubscriptionByAddressStart: () => Promise<any>;
};

export default function useSubContract() {
  const [subscitinManager, setSubscriptionManager] = useState<
    Partial<SubscribeManager>
  >({
    isReady: false,
  });
  useEffect(() => {
    detectEthereumProvider().then(() => {
      const web3 = new Web3((window as unknown as any).ethereum);
      const contract = new web3.eth.Contract(
        SUBMAN_ABI as any,
        SUBMAN_CONTRACT
      );

      const myAddress = (window.ethereum as unknown as any)
        .selectedAddress as string;

      const addSubscription = (
        serviceAddress: string,
        amount: number,
        timestamp: number,
        tokenAddress: string
      ) =>
        contract.methods
          .addPayee(serviceAddress, amount, timestamp, tokenAddress)
          .send({
            from: myAddress,
          });

      const getSubscriptionByAddress = (serviceAddress: string) =>
        contract.methods.getSub(myAddress, serviceAddress).call({
          from: myAddress,
        });

      const getSubscriptionByAddressStart = () =>
        contract.methods.endSubPayer(myAddress).call({
          from: myAddress,
        });

      setSubscriptionManager(() => ({
        isReady: true,
        contract,
        addSubscription,
        getSubscriptionByAddress,
        getSubscriptionByAddressStart,
      }));
    });
  }, []);

  return subscitinManager;
}
