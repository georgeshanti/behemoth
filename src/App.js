import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Schedule from './pages/schedule'


import NavButton from 'components/nav-button'
import asyncComponent from './utils/asyncComponent'

const HomeImport = () => import('pages/home')
//const ScheduleImport = () => import('pages/schedule')
const EventsImport = () => import('pages/events')
const CompetitionsImport = () => import('pages/competitions')
const ContactsImport = () => import('pages/contacts')
const ErrorImport = () => import('pages/error')
const SponsorsImport = () => import('pages/sponsors')

const Home = asyncComponent(HomeImport)
//const Schedule = asyncComponent(ScheduleImport)
const Events = asyncComponent(EventsImport)
const Competitions = asyncComponent(CompetitionsImport)
const Contacts = asyncComponent(ContactsImport)
const ErrorPage = asyncComponent(ErrorImport)
const Sponsors = asyncComponent(SponsorsImport)

const ComingSoon = ()=>{
  return(
    <iframe title="Coming Soon" style={{zIndex: 3, width: "100vw", height: "100vh", border: "none", position: "fixed"}} src="https://batmannair.ml/electronic-excel-coming-soon/" ></iframe>
    // <iframe title="Opening Animation" style={{zIndex: 1, width: "100vw", height: "100vh", border: "none", position: "fixed"}} src="https://batmannair.ml/Excel-front-page/" ></iframe>
  )
}

class Play extends Component{
  componentDidMount() {
    window.location.assign('https://play.excelmec.org/');
  }
  render(){
    return (<div></div>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="pageContainer">
        {/* <div className='background' >
            <svg viewBox="-1000 -1000 2000 1000">
                <circle cx="0" cy="200" r="1000" fill="#011935" />
                <circle cx="0" cy="200" r="800" fill="#022041" />
                <circle cx="0" cy="200" r="600" fill="#02244b" />
            </svg>
        </div> */}
        <div className="content">
          <Switch>
            <Route path='/events' component={Events} />
            <Route path='/competitions' component={Competitions} />
            <Route path='/contacts' component={Contacts} />
            <Route path="/schedule" component={Schedule} /> 
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/play" component={Play} />
            <Route exact path="/find-out" component={Home} />
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <NavButton/>
      </div>
    );
  }
}

export default App;
