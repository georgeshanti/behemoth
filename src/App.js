import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import NavButton from 'components/nav-button'

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          {/* <Route exact path="/" component={Events}/> */}
        </div>
        <NavButton/>
      </div>
    );
  }
}

export default App;
