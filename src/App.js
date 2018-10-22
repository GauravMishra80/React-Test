import React, { Component } from 'react';
import {Switch, BrowserRouter, Route } from 'react-router-dom';
import Counter from './components/counter';
import Home from './components/home';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/counter" component={Counter}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
