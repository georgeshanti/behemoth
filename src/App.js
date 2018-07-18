import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import NavButton from 'components/nav-button'
import asyncComponent from './utils/asyncComponent'
// import Home from './pages/home'
// import Events from './pages/events'
// import NavBar from './components/navbar-new'

const HomeImport = () => import('./pages/home')
const EventsImport = () => import('./pages/events-new')
const TalksImport = () => import('./pages/talks')
const ExcelEventsImport = () => import('./pages/excel-events')

const Home = asyncComponent(HomeImport)
const Events = asyncComponent(EventsImport)
const Talks = asyncComponent(TalksImport)
const ExcelEvents = asyncComponent(ExcelEventsImport)

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          <Route exact path="/" component={Events}/>
          <Route path='/events' component={ExcelEvents} />
        </div>
        <NavButton/>
      </div>
    );
  }
}

export default App;
