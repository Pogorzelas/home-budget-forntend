import {Action} from "../../interfaces/Action.interface";
import {Balance} from "../../interfaces/Balance.interface";

export type BalanceAction =
  | Action<'Balance.SetIncome', {list: Balance[]}>

export const balanceActions = {
  setIncome(list: Balance[]): BalanceAction {
    return {
      type: 'Balance.SetIncome',
      payload: {
        list
      }
    };
  },
};
