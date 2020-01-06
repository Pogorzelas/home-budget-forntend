import {Income} from "../../interfaces/Income.interface";

export interface IncomeState {
  income: Income[];
}

export const initialState: IncomeState = {
  income: [],
};
