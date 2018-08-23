import React, {Component} from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'
import EventGridCard from 'components/event-grid-card'
import EventCard from 'components/event-card'

export default class Events extends Component{

    constructor(props){
        super(props)
        this.state={
            index:0,
            cardInfo:[
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."}
            ]
        }
    }
    render(){
        var grid1 = []
        var grid2 = []
		for(var i=0 ; i<5 ; i++){
			var gridItem = ( <Link to={"/events/"+i}><EventGridCard details={this.state.cardInfo[i]} delay={i*100} /></Link>)
            if(i%2==0)
               grid1.push(gridItem)
            else
               grid2.push(gridItem)   
		}
        return(
        <div>
            <header><h1>Events</h1></header>

            <div id="grid">
                <div className={styles["left"]}>
                    {grid1}
                </div>
                <div className={styles["right"]}>
                    {grid2}
                </div>
            </div>
            <Route exact path='/events/:event' component={EventCard}/>
        </div>    
        )
    }
}