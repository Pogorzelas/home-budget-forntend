import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const api = ky.create({prefixUrl: process.env.REACT_APP_API});
const URL = 'incomes';

const getIncome = (): Promise<Income[]> => api.get(URL).json();

const createIncome = (incomeData: Income): Promise<Income[]> => {
  const options = {
    json: {
      ...incomeData,
    }
  };
  return api.post(URL, options).json();
};

const updateIncome = (id: string, incomeToUpdate: Partial<Income>) => {
  const options = {
    json: {
      ...incomeToUpdate,
    },
    searchParams: {
      id
    }
  };
  return api.patch(URL, options).json();
};

const deleteIncome = (id: string) => {
  const options = {
    searchParams: {
      id
    }
  };
  return api.delete(URL, options).json();
};

export {
  getIncome,
  createIncome,
  updateIncome,
  deleteIncome
}
