import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const URL = `${process.env.REACT_APP_API}/incomes`;
const api = ky.create({prefixUrl: URL});

const getIncome = (): Promise<Income[]> => api.get('').json();

const createIncome = (incomeData: Income): Promise<Income[]> => {
  const option = {
    json: {
      ...incomeData,
    }
  };
  return api.post('', option).json();
};

const updateIncome = (id: string, incomeToUpdate: Partial<Income>): Promise<void> => {
  const option = {
    json: {
      _id: id,
      ...incomeToUpdate,
    },
    //searchParams: id
  };
  return api.patch('', option).json();
};

export {
  getIncome,
  createIncome,
  updateIncome
}
