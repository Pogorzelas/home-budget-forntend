import React, {FC} from 'react';
import Header from "./layouts/Header/index";
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>

    </MuiThemeProvider>
  );
};

export default App;
