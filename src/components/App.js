import React, { Component } from 'react';
import '../css/App.css';
import Input from './Input';
import List from './List';
import Output from './Output';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <List />
        <Output />
      </div>
    );
  }
}

export default App;
