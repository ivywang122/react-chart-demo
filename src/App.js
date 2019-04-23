import React, { Component } from 'react';
import Header from './common/Header';
import LineChartContainer from './components/LineChartContainer'
import BarChartContainer from './components/BarChartContainer'
import DoughnutContainer from './components/DoughnutContainer'
import { HashRouter, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

/* eslint import/no-webpack-loader-syntax: off */
const scssColor = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./scss/_base/_colors.scss');
const theme = { colors: scssColor };

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={LineChartContainer} />
              <Route path="/BarChart" component={BarChartContainer} />
              <Route path="/Liquid" component={DoughnutContainer} />
            </Switch>
          </div>
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
