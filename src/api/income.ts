import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const URL = `${process.env.REACT_APP_API}/incomes`;
const api = ky.create({prefixUrl: URL});

const getIncome = () => api.get('').json();
const createIncome = (incomeData: Income) => {

  const json = {
    json: {
      ...incomeData,
    }
  };

  return api.post('', json).json();
};

export {
  getIncome,
  createIncome
}
