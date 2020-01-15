import {useMemo} from "react";
import {BalanceType} from "../../../enums/BalanceType.enum";

interface Hook {
  typeList: string[];
}

export const useModalContent = (): Hook => {
  const typeList = useMemo<string[]>(() => Object.values(BalanceType).map(key => key), [BalanceType]);
  return {
    typeList
  }
};
