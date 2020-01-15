import React, {FC} from 'react';
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layouts/index";
import Home from './view/Home/index';
import Balance from "./view/Balance/index";

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' exact component={Home}/>
            <Route path='/balance' exact component={Balance}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
