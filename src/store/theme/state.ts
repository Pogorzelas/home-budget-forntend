import {PaletteType} from "@material-ui/core";

export interface ThemeState {
  type: PaletteType;
}

export const initialState: ThemeState = {
  type: 'light',
};
