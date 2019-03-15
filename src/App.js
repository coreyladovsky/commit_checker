import React, { Component } from 'react';
import axios from 'axios';
import { USER } from './config/config';
// import './App.css';

class App extends Component {
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.github.com/repos/coreyladovsky/simpsons/commits",
      auth: {
        username: USER.NAME,
        password: USER.PASSWORD
      }
    })
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
