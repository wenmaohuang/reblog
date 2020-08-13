import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage"
import NavBar from "./views/NavBar"



class App extends Component {

  constructor(props) {
    super(props);
    this.ifLogin = false

}
  
  render() {
    return (

      <Router >
        <div className="App">
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nav/:id" component={NavBar} />
        </Switch>

      </Router>
    )
  }
}


export default App;
