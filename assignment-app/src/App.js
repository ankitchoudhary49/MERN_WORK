import React, { Component } from 'react';
import Navigate from './components/Navigation'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigate />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
