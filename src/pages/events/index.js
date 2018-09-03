import React, {Component} from 'react';
import styles from './style.module.css';
import { Route, Link } from 'react-router-dom'
import EventGridCard from 'components/event-grid-card'
import EventCard from 'components/event-card'

export default class Events extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
                {eventName:"Hello World",eventDescp:"Lorem ipsum dodo eye of modor dod frodo poop poop in toilet..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."},
                {eventName:"Hello World",eventDescp:"Lorem got is the best ..."},
                {eventName:"Hello World",eventDescp:"Lorem okokey ..."},
                {eventName:"Hello World",eventDescp:"Lorem ..."}
            ]
        }
    }


    render(){
        var grid1 = []
        var grid2 = []
        var colors=['#48413F','#B29F60','#294E8B','#229DEC', '#5E3D28'] //to change add colors in event cards too
		for(var i=0 ; i<5 ; i++){
            var gridbg=colors[i%4]
			var gridItem = ( <Link to={"/events/"+i} style={{textDecoration:'none'}}><EventGridCard details={this.state.cardInfo[i]} delay={i*100} colors={gridbg} /></Link>)
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
        </div>    
        )
    }
}