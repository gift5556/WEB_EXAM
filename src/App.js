import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Home2 from './Home2';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/Home2" activeClassName="active">Home2</NavLink></li>
                </ul>
            </div>
          <h1 className="App-title">Welcome to React</h1>
            <div className="App-intro">
                <Switch>
                      <Route path="/" component={Home} exact={true} />
                      <Route path="/Home2" component={Home2} />
                </Switch>

                  <button onClick> Get Data </button>
                  <button onClick> Clear </button>
                </div>
        </div>
        </BrowserRouter>

    );
  }
}

export default App;
