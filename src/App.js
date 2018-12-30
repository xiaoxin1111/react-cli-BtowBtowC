import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./view/home"
import Axios from "axios";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact component = {Home} path = '/'/>
          </Switch>
        </Router>
      </div>
    );
  }
  componentWillMount(){

  }
}

export default App;
