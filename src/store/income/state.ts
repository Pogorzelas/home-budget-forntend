import {Income} from "../../interfaces/Income.interface";

export interface IncomeState {
  list: Income[];
}

export const initialState: IncomeState = {
  list: [],
};
