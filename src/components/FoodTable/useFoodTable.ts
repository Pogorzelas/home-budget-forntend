import {SpendFood} from "../../interfaces/SpendFood.interface";
import {useEffect, useState} from "react";
import {spendInJanuary} from "../../mock/foods";

interface Hook {
  food: SpendFood[];
}

export const useFoodTable = (): Hook => {
  const [food, setFood] = useState<SpendFood[]>([]);

  useEffect(() => {
    setFood(spendInJanuary)
  }, []);

  return {
    food
  }
};
