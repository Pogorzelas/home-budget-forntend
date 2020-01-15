import ky from 'ky';
import {Balance} from "../interfaces/Balance.interface";

const api = ky.create({prefixUrl: process.env.REACT_APP_API});
const URL = 'incomes';

const getIncome = (): Promise<Balance[]> => api.get(URL).json();

const createIncome = (incomeData: Partial<Balance>): Promise<Balance[]> => {
  const options = {
    json: {
      ...incomeData,
    }
  };
  return api.post(URL, options).json();
};

const updateIncome = (id: string, incomeToUpdate: Partial<Balance>): Promise<void> => {
  const options = {
    json: {
      ...incomeToUpdate,
    }
  };
  return api.patch(`${URL}/${id}`, options).json();
};

const deleteIncome = (id: string): Promise<Balance[]> => api.delete(`${URL}/${id}`).json();

export {
  getIncome,
  createIncome,
  updateIncome,
  deleteIncome
}
