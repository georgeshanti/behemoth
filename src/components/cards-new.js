import React, { Component } from 'react';
import './cards-new.css';

import About from './cards-new-about'
import Format from './cards-new-format'
import Rules from './cards-new-rules'
import Contact from './cards-new-contact'

import {
    Route,
    NavLink,
    HashRouter
  } from 'react-router-dom';

class CardsNew extends Component {

         
    render() {
    return (
    <HashRouter>
      <div className="card">
        <div className="card-content">
        <div className="heading-font">Heading Event</div>
        <div className="purple-font">Prize Pool - 25k</div>
            <br/><br/>
            <div className="main-nav-block" >
            <nav>
                <ul>
                    <li>                        
                        <div id="about"><NavLink exact to="/events/about">About</NavLink></div>
                    </li>
                    <li>
                        <div id="format"><NavLink exact to="/events/format">Format</NavLink></div>
                    </li>
                    <li>
                        <div id="rules"><NavLink exact to="/events/rules">Rules</NavLink></div>
                    </li>
                    <li>
                        <div id="contact"><NavLink exact to="/events/contact">Contact</NavLink></div> 
                    </li>
                </ul>
            </nav>
            </div>
            <div className="main-nav-content">
                <Route exact path="/events/about" component={About} />
                <Route exact path="/events/format" component={Format} />
                <Route exact path="/events/rules" component={Rules} />
                <Route exact path="/events/contact" component={Contact} />
            </div>
    </div>
    </div>
    </HashRouter>     
    
    );
  }
}

export default CardsNew;