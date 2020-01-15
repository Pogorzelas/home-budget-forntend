import {Action} from "../../interfaces/Action.interface";
import {Balance} from "../../interfaces/Balance.interface";
import {BalanceType} from "../../enums/BalanceType.enum";

export type BalanceAction =
  | Action<'Balance.SetIncome', {expenses: Balance[], incomes: Balance[]}>

export const balanceActions = {
  setBalances(list: Balance[]): BalanceAction {
    return {
      type: 'Balance.SetIncome',
      payload: {
        expenses: list.filter(balance => balance.type === BalanceType.Expenses),
        incomes: list.filter(balance => balance.type === BalanceType.Incomes),
      }
    };
  },
};
