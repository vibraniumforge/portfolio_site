import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'

class App extends Component {
  constructor(props){
    super(props)
    this.state={  }
  }
  render(){
    return (
      <div className="App">
      <Switch>
        < Route exact path='/' render={ () => <Home /> } />
        < Route path='/about' render={ () => <About /> } />
        < Route path='/projects' render={ () => <Projects /> } />
      </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
