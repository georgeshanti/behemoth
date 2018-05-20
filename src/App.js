import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import asyncComponent from './utils/asyncComponent'
// import Home from './pages/home'
// import Events from './pages/events'
import NavBar from './components/navbar'

const HomeImport = () => import('./pages/home')
const EventsImport = () => import('./pages/events')
const TalksImport = () => import('./pages/talks')

const Home = asyncComponent(HomeImport)
const Events = asyncComponent(EventsImport)
const Talks = asyncComponent(TalksImport)

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/talks" component={Talks}/>
        </div>
        
      </div>
    );
  }
}

export default App;
