import {useEffect} from "react";
import {getIncome} from "../../api/income";
import {IncomeActions} from "../../store/income/action";
import {useDispatch} from "react-redux";

export const useIncome = (): void => {
  const dispatch = useDispatch();

  useEffect((): VoidFunction => {
    let isSubscribe = true;

    getIncome()
      .then((data) => {
        if (isSubscribe) {
          dispatch(IncomeActions.setIncome(data));
        }
      });

    return (): void => {
      isSubscribe = false;
    }
  }, []);

};
