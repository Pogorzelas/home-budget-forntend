import {SpendFood} from "../../interfaces/SpendFood.interface";
import {useEffect, useState} from "react";
import {spendInJanuary} from "../../temporary const/foods";

interface Hook {
  data: SpendFood[];
}

export const useFoodTable = (): Hook => {
  const [data, setData] = useState<SpendFood[]>([]);

  useEffect(() => {
    setData(spendInJanuary)
  }, []);

  return {
    data
  }
};
