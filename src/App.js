import React, { Component } from 'react';
import Header from './common/Header';
import DoughnutContainer from './components/DoughnutContainer'
import LineChartContainer from './components/LineChartContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

/* eslint import/no-webpack-loader-syntax: off */
const scssColor = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./scss/_base/_colors.scss');
const theme = { colors: scssColor };

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={DoughnutContainer} />
                <Route path="/LineChart" component={LineChartContainer} />
                <Route path="/Liquid" component={DoughnutContainer} />
              </Switch>
            </div>

        
          </Router>
      </ThemeProvider>
    );
  }
}

export default App;
