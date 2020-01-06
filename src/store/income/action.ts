import {Action} from "../../interfaces/Action.interface";
import {Income} from "../../interfaces/Income.interface";

export type IncomeAction =
  | Action<'Income.SetIncome', {income: Income[]}>

export const IncomeActions = {
  setIncome(income: Income[]): IncomeAction {
    return {
      type: 'Income.SetIncome',
      payload: {
        income
      }
    };
  },
};
