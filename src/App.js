import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import NavButton from 'components/nav-button'
import asyncComponent from './utils/asyncComponent'

const EventsImport = () => import('pages/events')
const ErrorImport = () => import('pages/error')

const Events = asyncComponent(EventsImport)
const ErrorPage = asyncComponent(ErrorImport)

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          <Switch>
            <Route path="/" exact render={()=> (<div className="hi"></div>)} />
            <Route path='/events' component={Events} />
            <Route path="/talks" render = {()=> (<h1>Talks</h1>)} />
            <Route path="/workshops" render = {()=> (<h1>Workshops</h1>)} />
            <Route path="/schedule" render = {()=> (<h1>Schedule</h1>)} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <NavButton/>
      </div>
    );
  }
}

export default App;
