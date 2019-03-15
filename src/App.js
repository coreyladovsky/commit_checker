import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get("https://api.github.com/repos/coreyladovsky/simpsons/commits")
    .then(res => {
      debugger
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
