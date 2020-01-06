import {useEffect, useState} from "react";

export const useIncomeManager = () => {
  const [list, setList] = useState();


  return {
    list
  }
};
