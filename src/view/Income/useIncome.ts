import {useEffect} from "react";
import {getIncome} from "../../api/income";
import {IncomeActions} from "../../store/income/action";
import {useDispatch} from "react-redux";

export const useIncome = (): void => {
  const dispatch = useDispatch();
  useEffect((): void => {
    getIncome()
      .then((data) => {
        dispatch(IncomeActions.setIncome(data));
      });
  }, []);
};
