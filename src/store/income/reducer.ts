import {IncomeState, initialState} from "./state";
import {IncomeAction} from "./action";

export default (state = initialState, action: IncomeAction): IncomeState => {
  switch (action.type) {
    case 'Income.SetIncome':
      return {
        ...state,
        income: action.payload.income
      };
    default:
      return state
  }
};
