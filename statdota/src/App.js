import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountsContainer from './Components/AccountsContainer.js';


export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="column"> i am here </div>
          <div className="column"> <AccountsContainer /> </div>
          <div className="column"> i am here too </div>
        </div>
      </div>
    );
  }
}
