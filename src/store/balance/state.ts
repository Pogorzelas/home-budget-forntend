import {Balance} from "../../interfaces/Balance.interface";

export interface BalanceState {
  expenses: Balance[];
  incomes: Balance[];
}

export const initialState: BalanceState = {
  incomes: [],
  expenses: [],
};
