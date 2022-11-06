import { useAccount } from "@web3modal/react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuthGuard(handler?: CallableFunction) {
  const { account } = useAccount();
  const navigate = useNavigate();

  const onGuardFail = useCallback(
    () => (handler ? handler() : navigate("/")),
    [handler, navigate]
  );

  useEffect(() => {
    if (account.isDisconnected) {
      onGuardFail();
    }
  }, [onGuardFail, account.isDisconnected]);

  return onGuardFail;
}
