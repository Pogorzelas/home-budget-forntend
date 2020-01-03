import {useDispatch} from "react-redux";
import {themeActions} from "../../store/theme/action";

interface Hook {
  handleTheme: VoidFunction;
}

export const useToggleTheme = (): Hook => {
  const dispatch = useDispatch();

  const handleTheme = (): void => {
    dispatch(themeActions.setTheme());
  };

  return {
    handleTheme,
  };
};
