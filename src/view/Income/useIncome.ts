import {useEffect} from "react";
import {getIncome} from "../../api/income";

export const useIncome = (): void => {
  useEffect((): void => {
    getIncome()
      .then((data) => {

      })
  }, []);
};
