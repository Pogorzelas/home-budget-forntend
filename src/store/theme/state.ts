import {PaletteType} from "@material-ui/core";
import {LocalStorageKey} from "../../enums/LocalStorageKey.enum";

export interface ThemeState {
  type: PaletteType;
}

const SavedTheme = localStorage.getItem(LocalStorageKey.ThemeType) as PaletteType;

export const initialState: ThemeState = {
  type: SavedTheme || 'dark',
};
