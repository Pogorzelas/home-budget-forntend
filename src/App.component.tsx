import React, {FC} from 'react';
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Content from './view/Content';
import {BrowserRouter, Route} from "react-router-dom";
import Layout from "./layouts";

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Layout>
          <Route path='/' component={Content}/>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
