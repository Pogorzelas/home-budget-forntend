export interface ThemeState {
  type: 'light' | 'dark';
}

export const initialState: ThemeState = {
  type: 'light',
};
