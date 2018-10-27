import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Counter from "./components/counter";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import Navigation from "./components/navigation";
import NavbarComponent from "./components/navbar";
import { Router, Link, IndexLink,hashHistory, browserHistory } from 'react-router';
import { IndexRoute } from 'react-router';
class App extends Component {
  render() {
    return (
     <NavbarComponent />
    );
  }
}

export default App;