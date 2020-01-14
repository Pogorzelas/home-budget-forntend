import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const api = ky.create({prefixUrl: process.env.REACT_APP_API});
const URL = 'incomes';

const getIncome = (): Promise<Income[]> => api.get(URL).json();

const createIncome = (incomeData: Partial<Income>): Promise<Income[]> => {
  const options = {
    json: {
      ...incomeData,
    }
  };
  return api.post(URL, options).json();
};

const updateIncome = (id: string, incomeToUpdate: Partial<Income>): Promise<void> => {
  const options = {
    json: {
      ...incomeToUpdate,
    }
  };
  return api.patch(`${URL}/${id}`, options).json();
};

const deleteIncome = (id: string): Promise<Income[]> => api.delete(`${URL}/${id}`).json();

export {
  getIncome,
  createIncome,
  updateIncome,
  deleteIncome
}
