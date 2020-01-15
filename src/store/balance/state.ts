import {Balance} from "../../interfaces/Balance.interface";

export interface BalanceState {
  incomes: Balance[];
}

export const initialState: BalanceState = {
  incomes: [],
};
