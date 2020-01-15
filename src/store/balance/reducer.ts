import {BalanceState, initialState} from "./state";
import {BalanceAction} from "./action";

export default (state = initialState, action: BalanceAction): BalanceState => {
  switch (action.type) {
    case 'Balance.SetIncome':
      return {
        ...state,
        incomes: action.payload.list
      };
    default:
      return state
  }
};
