import React, {Component} from 'react';
import styles from './style.module.css';
import EventGridCard from 'components/event-grid-card'

export default class Events extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."}
            ]
        }
    }
    render(){
        return(
        <div>
            <header><h1>Events</h1></header>

            <div id="grid">
                <div className={styles["left"]}>
                    <EventGridCard details={this.state.cardInfo[0]}/>
                    <EventGridCard details={this.state.cardInfo[1]}/>
                    <EventGridCard details={this.state.cardInfo[2]}/>
                </div>
                <div className={styles["right"]}>
                    <EventGridCard details={this.state.cardInfo[3]} />
                    <EventGridCard details={this.state.cardInfo[4]} />
                </div>
            </div>
        </div>    
        )
    }
}