import React, {FC} from 'react';
import NavBar from "./layouts/NavBar/index";
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Content from './layouts/Content';
import {Provider} from 'react-redux';

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar/>
      <Content/>
    </MuiThemeProvider>
  );
};

export default App;
