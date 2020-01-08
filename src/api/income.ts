import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const api = ky.create({prefixUrl: process.env.REACT_APP_API});
const URL = 'incomes';

const getIncome = (): Promise<Income[]> => api.get(URL).json();

const createIncome = (incomeData: Income): Promise<Income[]> => {
  const option = {
    json: {
      ...incomeData,
    }
  };
  return api.post(URL, option).json();
};

const updateIncome = (id: string, incomeToUpdate: Partial<Income>) => {
  const option = {
    json: {
      ...incomeToUpdate,
    },
    searchParams: {
      id
    }
  };
  return api.patch(URL, option).json();
};

export {
  getIncome,
  createIncome,
  updateIncome
}
