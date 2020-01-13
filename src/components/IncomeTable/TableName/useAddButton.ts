import {useDispatch} from "react-redux";

interface Hook {
  openModal: VoidFunction;
}

export const useAddButton = (): Hook => {
  const dispatch = useDispatch();

  const openModal = (): void => {

  };

  return {
    openModal
  }
};
