import ky from 'ky';
import {Balance} from "../interfaces/Balance.interface";

const api = ky.create({prefixUrl: process.env.REACT_APP_API});
const URL = 'balance';

const getBalance = (): Promise<Balance[]> => api.get(URL).json();

const createBalance = (incomeData: Partial<Balance>): Promise<Balance[]> => {
  const options = {
    json: {
      ...incomeData,
    }
  };
  return api.post(URL, options).json();
};

const updateBalance = (id: string, incomeToUpdate: Partial<Balance>): Promise<void> => {
  const options = {
    json: {
      ...incomeToUpdate,
    }
  };
  return api.patch(`${URL}/${id}`, options).json();
};

const deleteBalance = (id: string): Promise<Balance[]> => api.delete(`${URL}/${id}`).json();

export {
  getBalance,
  createBalance,
  updateBalance,
  deleteBalance
}
