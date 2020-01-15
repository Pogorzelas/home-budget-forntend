import {BalanceState, initialState} from "./state";
import {BalanceAction} from "./action";

export default (state = initialState, action: BalanceAction): BalanceState => {
  switch (action.type) {
    case 'Balance.SetIncome':
      return {
        ...state,
        expenses: action.payload.expenses,
        incomes: action.payload.incomes
      };
    default:
      return state
  }
};
