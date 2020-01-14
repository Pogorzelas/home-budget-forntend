import {useEffect, useState} from "react";
import {getIncome} from "../../api/income";
import {incomeActions} from "../../store/income/action";
import {useDispatch} from "react-redux";

export const useIncome = (): boolean => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect((): VoidFunction => {
    let isSubscribe = true;
    setIsLoading(true);

    getIncome()
      .then((data) => {
        if (isSubscribe) {
          dispatch(incomeActions.setIncome(data));
        }
      })
      .finally(() => setIsLoading(false));

    return (): void => {
      isSubscribe = false;
    }
  }, []);

  return isLoading
};
