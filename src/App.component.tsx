import React, {FC} from 'react';
import Header from "./layouts/Header/index";
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Content from './layouts/Content';
import {Provider} from 'react-redux';
import store from './store';

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <Content/>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
