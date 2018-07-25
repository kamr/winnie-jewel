import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Shop from './Components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Shop />
      </div>
    );
  }
}

export default App;
