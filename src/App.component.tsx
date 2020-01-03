import React, {FC} from 'react';
import Header from "./layouts/Header/index";
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Content from './layouts/Content';
import {Provider} from 'react-redux';

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Content/>
    </MuiThemeProvider>
  );
};

export default App;
