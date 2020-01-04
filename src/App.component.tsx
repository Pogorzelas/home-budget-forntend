import React, {FC} from 'react';
import {useAppProvider} from "./useAppProvider";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Content from './view/Content';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layouts";

const App: FC = () => {
  const {theme} = useAppProvider();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' component={Content}/>
            <Route path='/food' render={() => <div>food</div>}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
