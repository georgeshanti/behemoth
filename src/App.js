import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import asyncComponent from './utils/asyncComponent'
// import Home from './pages/home'
// import Events from './pages/events'
import NavBar from './components/navbar-new'

const HomeImport = () => import('./pages/home')
const EventsImport = () => import('./pages/events-new')
const TalksImport = () => import('./pages/talks')

const Home = asyncComponent(HomeImport)
const Events = asyncComponent(EventsImport)
const Talks = asyncComponent(TalksImport)

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>

        <div className="content">
          <Route exact path="/" component={Events}/>
        </div>
        
      </div>
    );
  }
}

export default App;
