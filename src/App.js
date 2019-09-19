import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import Header from './containers/Header'
// import Contact from './containers/Contact'

class App extends Component {
  constructor(props){
    super(props)
    this.state={  }
  }
  render(){
    return (
      <div className="App">
      
        <div className="Main Content">
          <Switch>
            < Route exact path='/' render={ () => <Home /> } />
            < Route path='/about' render={ () => <About /> } />
            < Route path='/projects' render={ () => <Projects /> } />

          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
