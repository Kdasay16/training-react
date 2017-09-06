import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';



class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

class Intro extends Component {
  render() {
    <div>
      <p className="App-intro">Let's get started!</p>
    </div>
  }
}




export default App;
