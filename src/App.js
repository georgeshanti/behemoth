import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';

import NavButton from 'components/nav-button'
import asyncComponent from './utils/asyncComponent'

const HomeImport = () => import('pages/home')
const EventsImport = () => import('pages/events')
const CompetitionsImport = () => import('pages/competitions')
const ErrorImport = () => import('pages/error')
const EventCardImport = () => import('components/event-card')

const Home = asyncComponent(HomeImport)
const Events = asyncComponent(EventsImport)
const Competitions = asyncComponent(CompetitionsImport)
const ErrorPage = asyncComponent(ErrorImport)
const EventCard = asyncComponent(EventCardImport)

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className='background' >
            <svg viewBox="-1000 -1000 2000 1000">
                <circle cx="0" cy="200" r="1000" fill="#011935" />
                <circle cx="0" cy="200" r="800" fill="#022041" />
                <circle cx="0" cy="200" r="600" fill="#02244b" />
            </svg>
        </div>
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path='/events' component={Events} />
            <Route path='/events/' component={EventCard} />
            <Route path='/competitions' component={Competitions} />
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
