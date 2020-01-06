import {Action} from "../../interfaces/Action.interface";
import {Income} from "../../interfaces/Income.interface";

export type IncomeAction =
  | Action<'Income.SetIncome', {list: Income[]}>

export const IncomeActions = {
  setIncome(list: Income[]): IncomeAction {
    return {
      type: 'Income.SetIncome',
      payload: {
        list
      }
    };
  },
};
