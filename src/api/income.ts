import ky from 'ky';
import {Income} from "../interfaces/Income.interface";

const URL = `${process.env.REACT_APP_API}/incomes`;
const api = ky.create({prefixUrl: URL});

const getIncome = () => api.get('').json();
const createIncome = (incomeData: Income) => {

  const option = {
    json: {
      ...incomeData,
    }
  };

  return api.post('', option).json();
};

export {
  getIncome,
  createIncome
}