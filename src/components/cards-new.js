import React, { Component } from 'react';
import './cards-new.css';

import About from './cards-new-about'
import Format from './cards-new-format'
import Rules from './cards-new-rules'
import Contact from './cards-new-contact'

import {
    Route,
    NavLink,
    HashRouter,
    Redirect
  } from 'react-router-dom';

class CardsNew extends Component {

    constructor(props) {
        super(props)
    }

    renderRedirect() {
        if(this.props.redirect) {
            return(
                <div>
                <Route exact path="/events/about" render = {() => <Redirect to="/events" />}/>
                <Route exact path="/events/format" render = {() => <Redirect to="/events" />}/>
                <Route exact path="/events/rules" render = {() => <Redirect to="/events" />}/>
                <Route exact path="/events/contact" render = {() => <Redirect to="/events" />}/>
                </div>
            );
        }
        else
         <div></div>
    }

    renderAbout() {
        if(this.props.redirectAbout) {
            return <Route exact path="/events" render = {() => <Redirect to="/events/about" />}/>
        }
        else 
        return <div></div>
    }

         
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
                        <div id="about"><NavLink exact to="/events/about" activeStyle={{color:"white",backgroundColor:"black"}}>About</NavLink></div>
                    </li>
                    <li>
                        <div id="format"><NavLink exact to="/events/format" activeStyle={{color:"white",backgroundColor:"black"}}>Format</NavLink></div>
                    </li>
                    <li>
                        <div id="rules"><NavLink exact to="/events/rules" activeStyle={{color:"white",backgroundColor:"black"}}>Rules</NavLink></div>
                    </li>
                    <li>
                        <div id="contact"><NavLink exact to="/events/contact" activeStyle={{color:"white",backgroundColor:"black"}}>Contact</NavLink></div> 
                    </li>
                </ul>
            </nav>
            </div>
            <div className="main-nav-content">
                <Route exact path="/events/about" component={About} />
                <Route exact path="/events/format" component={Format} />
                <Route exact path="/events/rules" component={Rules} />
                <Route exact path="/events/contact" component={Contact} />
                <div>{this.renderAbout()}</div>
                <div>{this.renderRedirect()}</div>
            </div>
    </div>
    </div>
    </HashRouter>     
    
    );
  }
}

export default CardsNew;
