import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import NavButton from 'components/nav-button'
import asyncComponent from './utils/asyncComponent'

const EventsImport = () => import('pages/events')
const Events = asyncComponent(EventsImport)

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          {/* <IndexRoute path="/" render = {()=> (<h1>Home</h1>)} /> */}
          <Route path='/events' component={Events} />
          <Route path="/talks" render = {()=> (<h1>Talks</h1>)} />
          <Route path="/workshops" render = {()=> (<h1>Workshops</h1>)} />
          <Route path="/schedule" render = {()=> (<h1>Schedule</h1>)} />
        </div>
        <NavButton/>
      </div>
    );
  }
}

export default App;
