import {useEffect, useState} from "react";
import {getBalance} from "../../api/balance";
import {balanceActions} from "../../store/balance/action";
import {useDispatch} from "react-redux";

export const useBalance = (): boolean => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect((): VoidFunction => {
    let isSubscribe = true;
    setIsLoading(true);

    getBalance()
      .then((data) => {
        if (isSubscribe) {
          dispatch(balanceActions.setIncome(data));
        }
      })
      .finally(() => setIsLoading(false));

    return (): void => {
      isSubscribe = false;
    }
  }, []);

  return isLoading
};
