import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Home2 from './Home2';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li><NavLink to="/Home" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/Home2" activeClassName="active">Home2</NavLink></li>
                </ul>
            </div>

          <h1 className="App-title">Welcome to React</h1>

        <div className="App-intro">
            <Home/>

            <button onClick> Get Data </button>
            <button onClick> Clear </button>
        </div>
      </div>


    );
  }
}

export default App;
