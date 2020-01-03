export interface ThemeState {
  themeType: 'light' | 'dark';
}

export const initialState: ThemeState = {
  themeType: 'light',
};
